import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";
import { zhajinhua_msgs, zhajinhua_request } from "../../../../../common/script/proto/net_zhajinhua";
import GameManager from "../../../../../common/script/model/GameManager";
import CpnPlayer from "../../../../../common/script/comps/CpnPlayer";
import CpnHandcard from "../../../../../common/script/comps/CpnHandcard";
import CpnUserState from "../../../../../common/script/comps/CpnUserState";
import UIManager from "../../../../../kernel/view/UIManager";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";


const {ccclass, property} = cc._decorator;

@ccclass
export default class zjhUI extends BaseComponent {
//    private _players:Array<CpnPlayer> = [];
    private _handors:Array<CpnHandcard> = [];
    private _stateNodes:Array<CpnUserState> = [];
    private _tmrState = 0;
    
    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        for(var i = 0; i <= 4; i++) {
    //        this._players.push(this.m_ui["CpnPlayer"+i].getComponent(CpnPlayer));
            this._handors.push(this.m_ui["CpnHandcard"+i].getComponent(CpnHandcard));
            this._stateNodes.push(this.m_ui["stateTip"+i].getComponent(CpnUserState));
        }

        this.initUIEvent();
        this.initNetEvent();

        this.onRespZhajinhuaReady(null);
    }

    //场景信息
    onRespZhajinhuaGameEnv(param:any) {
        //
    }

    //准备阶段
    onRespZhajinhuaReady(param:any) {
        this.m_ui.gameLayer.active = true;
        this.m_ui.opLayer.active = true;
        for(var i in this._stateNodes){
            this._stateNodes[i].setState(5);
        }
        UIManager.showSpineAsync("common/spines/fan", 0, "a", true, this.node, {zIndex:10, x:0, y:0, scale:0.5}, null);
        TimerManager.loopSecond(1, 3, new CHandler(this, (tmr:BaseTimer)=>{
            if(tmr.getRemainTimes() <= 0) {
                this.onRespZhajinhuaFight(null);
            }
        }), true);
    }

    //战斗阶段
    onRespZhajinhuaFight(param:any) {
        this.m_ui.gameLayer.active = true;
        this.m_ui.opLayer.active = true;
    }

    //结算阶段
    onRespZhajinhuaJiesuan(param:any) {
        this.m_ui.gameLayer.active = true;
        this.m_ui.opLayer.active = false;
    }


    //轮到谁
    onRespCurTurnto(param:any) {
        cc.log("轮到谁", param.UserID, param.RemainTime);
    }

    //跟注
    onRespZhajinhuaFollow(param:any) {
        cc.log("跟注", param.UserID, param.Money);
    }

    //加注
    onRespZhajinhuaRaise(param:any) {
        cc.log("加注", param.UserID, param.Money);
    }

    //看牌
    onRespZhajinhuaLook(param:any) {
        cc.log("看牌", param.UserID, param.Cards);
    }

    //比牌
    onRespZhajinhuaCompare(param:any) {
        cc.log("比牌", param);
    }

    //弃牌
    onRespZhajinhuaGiveup(param:any) {
        cc.log("弃牌", param.UserID);
    }

    initNetEvent() {
    //    EventCenter.getInstance().listen(zhajinhua_msgs.RespZhajinhuaGameEnv, this.onRespZhajinhuaGameEnv, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.RespZhajinhuaReady, this.onRespZhajinhuaReady, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.RespZhajinhuaCompare, this.onRespZhajinhuaCompare, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.RespZhajinhuaFollow, this.onRespZhajinhuaFollow, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.RespZhajinhuaGiveup, this.onRespZhajinhuaGiveup, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.RespZhajinhuaLook, this.onRespZhajinhuaLook, this);
        EventCenter.getInstance().listen(zhajinhua_msgs.RespZhajinhuaRaise, this.onRespZhajinhuaRaise, this);
    }

    initUIEvent() {
        CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(0);
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_giveup, function(){ 
            zhajinhua_request.ReqZhajinhuaGiveup(null);
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_look, function(){ 
            zhajinhua_request.ReqZhajinhuaLook(null);
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_follow, function(){ 
            zhajinhua_request.ReqZhajinhuaFollow({Money:10});
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_add, function(){ 
            zhajinhua_request.ReqZhajinhuaRaise({Money:20});
        }, this);
        
        CommonUtil.addClickEvent(this.m_ui.btn_compare, function(){ 
            zhajinhua_request.ReqZhajinhuaCompare({HitId:10002});
		}, this);
    }
    
}
