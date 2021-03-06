const fs = require("fs");
const { exec } = require('child_process');
const cfgData = require("./export_cfg");
const helputil = require("./helputil");

//服务器导出目录
var serverOutDir = cfgData.serverOutDir;

//要生成的pb文件
var pbfiles = cfgData.pbfiles;

console.log("开始生成自动化代码");
console.log(serverOutDir);
console.log(pbfiles);

var g_CMDID = -1;
function getCmdId() {
	g_CMDID++;
	return g_CMDID;
}

function getRequestParam(argInfo) {
	if(!argInfo) { return "any"; }
	var fields = argInfo.fields || {};
	var desc = "{";
	for(var fieldName in fields) {
		var typeStr = fields[fieldName].type;
		if(typeStr.indexOf("int") >= 0){
			typeStr = "number";
		}
		else if(typeStr == "string") {
			typeStr = "string";
		}
		else {
			typeStr = "any";
		}

		if(fields[fieldName].rule==="repeated"){
			typeStr = typeStr + "[]";
		}
		
		if(desc=="{")
			desc += " " + fieldName + ":" + typeStr;
		else
			desc += ", " + fieldName + ":" + typeStr;
	}
	desc += " }";
	if(desc=="{ }") { desc = "{}"; }
	return desc;
}


function doGenerate() {
	//server begin
	var outServerMsg = serverOutDir + "/msg/msg.go";
	var outRouter = serverOutDir + "/gate/router.go";
	var outServerHandler = serverOutDir + "/handler.go";
	var outHandleFunc = serverOutDir + "/handlerFunc.go";

	var msgStr = "";
	var routerStr = "";
	var handStr = "";
	var funcStr = "";


	msgStr = "//---------------------------------\n";
	msgStr += "//该文件自动生成，请勿手动更改\n";
	msgStr += "//---------------------------------\n";
	msgStr += "package msg\n\n"
	msgStr += "import (\n"
	msgStr += '    "sync"\n'
	msgStr += '    "github.com/golang/protobuf/proto"\n'
	msgStr += '    "github.com/name5566/leaf/network/json"\n'
	msgStr += '    "github.com/name5566/leaf/network/protobuf"\n'
	msgStr += '    protoMsg "server/msg/go"\n'
	msgStr += ')\n\n'
	msgStr += "// 使用默认的 JSON 消息处理器（默认还提供了 protobuf 消息处理器）\n"
	msgStr += "var ProcessorJson = json.NewProcessor()\n"
	msgStr += "var ProcessorProto = protobuf.NewProcessor()\n\n"
	msgStr += "//对外接口 【这里的注册函数并非线程安全】\n"
	msgStr += "func RegisterMessage(message proto.Message) {\n"
	msgStr += "    var wg sync.WaitGroup\n"
	msgStr += "    wg.Add(1)\n"
	msgStr += "    ProcessorProto.Register(message)\n"
	msgStr += "    wg.Done()\n"
	msgStr += "}\n\n"
	msgStr += "func init() {"

	
	routerStr = "//---------------------------------\n";
	routerStr += "//该文件自动生成，请勿手动更改\n";
	routerStr += "//---------------------------------\n";
	routerStr += "package gate\n\n";
	routerStr += 'import (\n';
	routerStr += '    "server/game"\n';
	routerStr += '    "server/login"\n';
	routerStr += '    "server/msg"\n';
	routerStr += '    protoMsg "server/msg/go"\n';
	routerStr += ')\n\n';
	routerStr += '//路由模块分发消息【模块间使用 ChanRPC 通讯，消息路由也不例外】\n';
	routerStr += '//注:需要解析的结构体才进行路由分派，即用客户端主动发起的)\n';
	routerStr += "func init() {";
	//server end


	for(var iii in pbfiles) {
		var cfg = pbfiles[iii];
		var pbfilename = cfg.name;
		var curRouter = cfg.router;  //for server
		var filepath = cfgData.protoDir + "/" + pbfilename + ".proto";
		var line_list = fs.readFileSync(filepath, 'utf8').split('\n');


		//client begin
		var mudname = helputil.getPackageName(line_list);
		var channelName = "game";
		if(cfg.channel!==null && cfg.channel!==undefined && cfg.channel!=="") {
			channelName = cfg.channel;
		}
		var outClient = cfgData.clientOutDir + "net_" + pbfilename + ".ts";
		var outClientHandler = null;
		//client end


		// json file geretated by probuf lib
		var jsonFile = "tmps/" + pbfilename+".json";
		var jsonStr = fs.readFileSync(jsonFile, 'utf8');
		var ptoJs = JSON.parse(jsonStr);
		ptoJs = ptoJs["nested"][mudname]["nested"];
		// console.log(ptoJs);
		// fs.unlinkSync(jsonFile);
		
		
		//client begin
		var clientHandleStr = "//---------------------------------\n";
		clientHandleStr += "// " + pbfilename + "响应句柄\n"
		clientHandleStr += "//---------------------------------\n";
		clientHandleStr += 'import { ' + mudname +'_msgs } from "../../../../common/script/proto/net_' + pbfilename + '"\n\n';
		clientHandleStr += "var proxy_" + mudname + " = {\n\n";

		var outstr = "//---------------------------------\n";
		outstr += "//该文件自动生成，请勿手动更改\n";
		outstr += "//---------------------------------\n";
		outstr += "import { " + mudname + " } from \"./" + pbfilename + "\";\n";
		outstr += "import ChannelDefine from \"../definer/ChannelDefine\";\n";
		outstr += "import LeafWsPacket from \"../../../kernel/net/packet/LeafWsPacket\";\n\n\n";
		var enumStr = "export enum " + mudname + "_msgs {\n";
		var cmdTblStr = "export var " + mudname + "_packet_define = {\n";
		var reqStr = "export class "+mudname+"_request {\n";
		//client end


		//server begin
		msgStr += "\n    //" + pbfilename + "文件生成的代码\n";
		handStr += "\n    //" + pbfilename + "文件生成的代码\n";
		routerStr += "\n    //" + pbfilename + "文件生成的代码\n";
		funcStr += "//-----------------------------------------------\n";
		funcStr += "//" + pbfilename + "文件生成的代码\n";
		funcStr += "//-----------------------------------------------\n";
		//server end


		//遍历proto文件中的message定义
		for(var msgName in ptoJs) {
			var argInfo = ptoJs[msgName];
			if(argInfo.values != null && argInfo.values != undefined && (argInfo.fields == null || argInfo.fields == undefined)) {
				console.log("enum不生成为协议", msgName);
			} else {
				var cmdId = getCmdId();
				//client begin
				enumStr += "    " + msgName + " = " + cmdId + ",\n";
					
				cmdTblStr += "    " + cmdId + ": new LeafWsPacket(" + cmdId + ", " + mudname+"."+msgName + ", \"" + mudname+"."+msgName + "\"" + "),\n";

				reqStr += "    public static "+msgName+"( data:"+getRequestParam(argInfo)+" ) ";
				reqStr += "{ ";
				reqStr += mudname+"_packet_define["+cmdId+"].sendToChannel(ChannelDefine."+channelName+", data, false); ";
				reqStr += "}\n";

				clientHandleStr += "    [" + mudname+"_msgs"+"."+msgName + "] : function(param: any) {\n";
				clientHandleStr += "\n";
				clientHandleStr += "    },\n\n"
				//client end


				//server begin
				msgStr += "    RegisterMessage(&protoMsg." + msgName + "{})\n";

				routerStr += "    msg.ProcessorProto.SetRouter(&protoMsg."+ msgName +"{}, "+ curRouter +".ChanRPC)\n";

				handStr += "    handleMsg(&protoMsg." +msgName+ "{}, handle" + msgName + ")\n";

				funcStr += "// \n";
				funcStr += "func handle"+msgName+"(args []interface{}) {\n";
				funcStr += "    m := args[0].(*protoMsg."+msgName+")\n";
				funcStr += "    a := args[1].(gate.Agent)\n";
				funcStr += '    log.Debug("[receive]'+msgName+':->%v", m)\n';
				funcStr += "\n}\n\n";
				//server end
			}
		}
	
		//client begin
		enumStr += "}\n\n";
		cmdTblStr += "}\n\n";
		reqStr += "}\n\n";
		outstr += enumStr + cmdTblStr + reqStr;
		helputil.write2file(outClient, outstr);

		clientHandleStr += "}\n\n";
		clientHandleStr += "export default proxy_"+mudname+";\n";
		if(outClientHandler) {
			if(!fs.existsSync(outClientHandler)){
				helputil.write2file(outClientHandler, clientHandleStr);
			}
		}
		//client end
	}
	
	//server begin
	routerStr += "}\n\n"
	msgStr += "}\n"
	
	helputil.write2file(outServerMsg, msgStr);
	helputil.write2file(outRouter, routerStr);
	//helputil.write2file(outHandleFunc, funcStr);
	//helputil.write2file(outServerHandler, handStr);
	//server end
}


var waitCnt = pbfiles.length;
for(var iii in pbfiles) {
	var pbfilename = pbfiles[iii].name;
	var filepath = cfgData.protoDir + "/" + pbfilename + ".proto";
	exec("pbjs -t json " + filepath + " -o tmps/" + pbfilename + ".json", ()=>{
		waitCnt--;
		console.log("waiting count: ", waitCnt);
		if(waitCnt <= 0) {
			doGenerate();
		}
	});
}