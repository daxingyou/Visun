import SubgameEntry from "../../utils/SubgameEntry";
import GameConfig from "../../utils/GameConfig";
import UIManager from "../../../../../script/kernel/gui/UIManager";
import HttpCore from "../../../../../script/kernel/net/HttpCore";
import EventCenter from "../../../../../script/launcher/EventCenter";
import BaseComp from "../../../../../script/launcher/view/BaseComp";
import PlatformUtil from "../../../../../script/launcher/PlatformUtil";
import CommonUtils from "../../../../../script/kernel/utils/CommonUtils";
import User from "../../model/User";
import WsCore from "../../../../../script/kernel/net/WsCore";
import http_rules from "../../proxy/rule/http_rules";
import ws_rules from "../../proxy/rule/ws_rules";
import http_responds from "../../proxy/http_responds";
import ws_responds from "../../proxy/ws_responds";
import PokerCard from "../../../../common/script/PokerCard";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyUI extends BaseComp {
    @property(cc.Button)
    btn_user: cc.Button = null;
    @property(cc.Button)
    btn_ddz: cc.Button = null;
    @property(cc.Button)
    btn_brnn: cc.Button = null;
    @property(cc.Button)
    btn_fqzs: cc.Button = null;
    @property(cc.Button)
    btn_zjh: cc.Button = null;
    @property(cc.Layout)
    draglayyer: cc.Layout = null;
    @property(cc.Node)
    circlenode: cc.Node = null;

	onLoad () 
	{
        this.btn_user.node.on("click", function(){
            UIManager.openPopwnd("lobby/prefabs/LoginUI", null);
        }, this);

        var gameBtnList = [
            { id:GameConfig["40000040"].id, btn:"btn_ddz" },
            { id:GameConfig["90000040"].id, btn:"btn_brnn" },
            { id:GameConfig["80000044"].id, btn:"btn_fqzs" },
            { id:GameConfig["40070012"].id, btn:"btn_zjh" },
        ]
        
        var dtAngle = 360/12;
        var startAngle = 180-dtAngle/2;
        var R = 500;
        for(var i=0; i<gameBtnList.length; i++) {
            var cfg = gameBtnList[i];
            var bton = this[cfg.btn];
            bton.gameId = cfg.id;
            bton.node.on("click", function(){
                SubgameEntry.instance().enterGame(this.gameId);
            }, bton);
            var curAngle = startAngle - i * dtAngle;
            // bton.node.x = R * Math.cos(curAngle * Math.PI / 180);
            // bton.node.y = R * Math.sin(curAngle * Math.PI / 180);
        }
        
        this.initNet();

        this.draglayyer.node.on(cc.Node.EventType.TOUCH_MOVE, function(event){
            var dx = event.touch.getDelta().x;
            this.circlenode.angle -= dx*0.05;
        }, this);

        this.tests();
    }

    private initNet() {
        HttpCore.registProcotol(http_rules, http_responds);
        WsCore.registProtocol(ws_rules, ws_responds);

        EventCenter.instance().listen("req_userinfo", this.req_userinfo, this);
        EventCenter.instance().listen("req_room_select_info", this.req_room_select_info, this);
        EventCenter.instance().listen("req_enter_room", this.req_enter_room, this);

        var param = { 
            deviceID : PlatformUtil.getDeviceId(), 
            platformId : 3
        };
        HttpCore.request("req_youke_login", null, param);
    }

    private req_userinfo(data:any) {
        UIManager.toast("登录成功");
        var allNodes = {};
        CommonUtils.traverseNodes(this.node, allNodes);
        allNodes["HeroUI"].getComponent("HeroUI").setUserInfo(User.getHero());
    }

    private req_room_select_info(info){
        cc.log(info);
    }

    private req_enter_room(info) {
        cc.log("------------------");
        cc.log(info);
    }

    private tests() {
        //加载spine
        var self = this;
        cc.loader.loadRes("common/spines/bairenniuniu_kaishixiazhu.json", sp.SkeletonData, 
		function(err, resc){
			if( err ) { cc.log( '载入spine失败:' + err ); return; }
            //var obj = cc.instantiate(resc);
            var obj = new cc.Node();
            var sk = obj.addComponent(sp.Skeleton);
            sk.skeletonData = resc;
            self.node.addChild(obj, 10);
            sk.setAnimation(1, "animation", true);
        });
        cc.loader.loadRes("common/prefabs/PokerCard", cc.Prefab, 
		function(err, resc){
			if( err ) { cc.log( '载入prefab失败:' + err ); return; }
            var obj = cc.instantiate(resc);
            var cpn = obj.getComponent("PokerCard");
            cpn.state = 1;
            self.node.addChild(obj, 10);
            // cpn.node.on("touchstart", function(event:any){ if(cpn.state===1) cpn.state=0; else cpn.state=1; });
        });
        cc.loader.loadRes("common/prefabs/HandCard", cc.Prefab, 
		function(err, resc){
			if( err ) { cc.log( '载入prefab失败:' + err ); return; }
            var obj = cc.instantiate(resc);
            var cpn = obj.getComponent("HandCard");
            self.node.addChild(obj, 10);
            // cpn.node.on("touchstart", function(event:any){ if(cpn.state===1) cpn.state=0; else cpn.state=1; });
		});
    }

}
