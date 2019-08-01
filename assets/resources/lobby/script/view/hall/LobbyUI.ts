import rule_login from "../../proxy/rules/rule_login";
import SubgameEntry from "../../utils/SubgameEntry";
import GameConfig from "../../utils/GameConfig";
import UIManager from "../../../../../script/kernel/gui/UIManager";
import HttpCore from "../../../../../script/kernel/net/HttpCore";
import EventCenter from "../../../../../script/launcher/EventCenter";
import WsSocket from "../../../../../script/kernel/net/WsSocket";
import JsonCodec from "../../../../../script/kernel/codec/JsonCodec";
import BaseComp from "../../../../../script/launcher/view/BaseComp";
import PlatformUtil from "../../../../../script/launcher/PlatformUtil";
import CommonUtils from "../../../../../script/kernel/utils/CommonUtils";
import User from "../../model/User";

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
            { id:GameConfig.ddz.id, btn:"btn_ddz" },
            { id:GameConfig.brnn.id, btn:"btn_brnn" },
            { id:GameConfig.fqzs.id, btn:"btn_fqzs" },
            { id:GameConfig.zjh.id, btn:"btn_zjh" },
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
    }

    private initNet() {
        HttpCore.registProcotols(rule_login);

		EventCenter.instance().listen("req_userinfo", this.req_userinfo, this);

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

}
