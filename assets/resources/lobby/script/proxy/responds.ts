import LoginMgr from "../model/LoginMgr";
import User from "../model/User";
import HttpResponds from "../../../../script/kernel/net/HttpResponds";
import HttpCore from "../../../../script/kernel/net/HttpCore";
import WsSocket from "../../../../script/kernel/net/WsSocket";
import JsonCodec from "../../../../script/kernel/codec/JsonCodec";
import { WS_URL } from "../../../../script/looker/Consts";

HttpResponds["req_youke_login"] = function(data:any){
	var info = data 
	if(!info) return;
	LoginMgr.instance.token = info.sid;
	HttpCore.token = info.sid;
	HttpCore.request("req_userinfo", null, {userId:info.userId});
}

HttpResponds["req_userinfo"] = function(data:any) {
	var info = data 
	if(!info) return;
	User.setHeroId(info.userId);
	User.updateUser(info);

	var url = WS_URL + HttpCore.token;
	WsSocket.instance().connect(url, new JsonCodec());
}

