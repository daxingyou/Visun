import BaseComponent from "../../../../kernel/view/BaseComponent";
import SimplePool from "../../../../kernel/basic/pool/SimplePool";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import { BaseTimer } from "../../../../kernel/basic/timer/BaseTimer";
import TimerManager from "../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../kernel/basic/datastruct/CHandler";
import AudioManager from "../../../../kernel/audio/AudioManager";
import GameUtil from "../../../../common/script/utils/GameUtil";
import CpnChip from "../../../../common/script/comps/CpnChip";
import GameManager from "../../../../common/script/model/GameManager";
import CpnChipbox2d from "../../../../common/script/comps/CpnChipbox2d";
import UIManager from "../../../../kernel/view/UIManager";
import { baccarat_request } from "../../../../common/script/proto/net_baccarat";

var margin = [
	{ left:32,right:32,bottom:32,top:32 },
    { left:32,right:32,bottom:32,top:32 },
    { left:32,right:32,bottom:32,top:32 },
    { left:32,right:32,bottom:32,top:32 },
    { left:32,right:32,bottom:32,top:32 },
    { left:32,right:32,bottom:32,top:32 },
    { left:32,right:32,bottom:32,top:32 },
    { left:32,right:32,bottom:32,top:32 },
];
var testdata = [ 
	{AreaId:0,Money:35280}, 
	{AreaId:1,Money:35280}, 
	{AreaId:2,Money:28650}, 
	{AreaId:3,Money:26455}, 
    {AreaId:4,Money:34255},
    {AreaId:5,Money:28650}, 
	{AreaId:6,Money:26455}, 
	{AreaId:7,Money:24255},
];


const {ccclass, property} = cc._decorator;

@ccclass
export default class BacarratUI extends BaseComponent {
    _rule:number[] = [5,10,50,100,500];
	private tmrState = 0;

	_loadedRes:any;
	_pool:SimplePool = new SimplePool(():cc.Node=>{
		var obj = cc.instantiate(this._loadedRes);
		obj.scale = 0.4;
		return obj;
	});

	onLoad () {
		CommonUtil.traverseNodes(this.node, this.m_ui);
		this.initUIEvents();

		var self = this;
		cc.loader.loadRes(ViewDefine.CpnChip, cc.Prefab, function (err, loadedRes) {
			if(err) { cc.log("error: "+err); return; }
			if(!cc.isValid(self)) { return; }
			self._loadedRes = loadedRes;
		});
        this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).setChipValues(this._rule);
		this.toStateReady();
	}

	onDestroy(){
		this._pool.clear();
		super.onDestroy();
	}

	private onStateTimer(tmr:BaseTimer) {
	//	this.m_lab.lab_cd.string = tmr.getRemainTimes().toString();
	}

	//准备阶段
	private toStateReady() {
	//	this.m_ui.CpnGameState.getComponent(CpnGameState).setState(0);
		
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
		TimerManager.loopSecond(3, 1, new CHandler(this, ()=>{
			this.toStateBetting();
		}));
	}

	//下注阶段
	private toStateBetting() {
	//	this.m_ui.CpnGameState.getComponent(CpnGameState).setState(2);
		AudioManager.getInstance().playEffectAsync("common/audios/startbet", false);

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 10, new CHandler(this, this.onStateTimer), true);
	//	TimerManager.loopSecond(1, 9, new CHandler(this, this.onPlayersBet));
		TimerManager.loopSecond(10, 1, new CHandler(this, (tmr:BaseTimer)=>{
			this.toStateJiesuan();
		}));
	}

	private playJiesuan() {
		var self = this;
		this.m_ui.chipLayer.runAction(cc.sequence(
			cc.delayTime(1),
			cc.callFunc(function(){
				var childs = this.m_ui.chipLayer.children
				var len = childs.length;
				for(var i=len-1; i>=0; i--){
					childs[i].runAction(
						cc.callFunc(function(obj){
							self._pool.delObject(obj);
						}, childs[i])
					);
				}
			}, this)
		));
		AudioManager.getInstance().playEffectAsync("common/audios/collect", false);
	}

	//结算阶段
	private toStateJiesuan() {
	//	this.m_ui.CpnGameState.getComponent(CpnGameState).setState(4);
		AudioManager.getInstance().playEffectAsync("common/audios/endbet", false);

		this.playJiesuan();

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
		TimerManager.loopSecond(3, 1, new CHandler(this, ()=>{
			this.toStateReady();
		}));
	}

	private onPlayersBet(tmr:BaseTimer, param:any) {
		GameUtil.playShake(this.m_ui.btnPlayerlist, 0.2, 1);
		//飞筹码
		param = param || testdata;
		for(var i in param) {
			var info = param[i];
			var nums = GameUtil.parseChip(info.Money, this._rule);
			for(var j in nums) {
				var chip = this._pool.newObject();
				chip.getComponent(CpnChip).setChipValue(nums[j], true);
				this.m_ui.chipLayer.addChild(chip);
				chip.__areaId = info.AreaId;
				GameUtil.bezierTo1(chip, this.m_ui.btnPlayerlist, this.m_ui["area"+info.AreaId], 0.14+0.1*info.AreaId, parseInt(j)*0.01, margin[info.AreaId]);
			}
		}
		//播音效
		if(tmr && tmr.getRemainTimes() < 3) {
			AudioManager.getInstance().playEffectAsync("common/audios/lastsecond", false);
		} 
		AudioManager.getInstance().playEffectAsync("common/audios/countdown", false);
		AudioManager.getInstance().playEffectAsync("common/audios/chipmove", false);
    }
    
    private onClickArea(areaID:number) {
        var money = this.m_ui.CpnChipbox2d.getComponent(CpnChipbox2d).getSelectValue();
        if(!money) {
            UIManager.toast("请选择下注区域");
            return;
        }
        cc.log("下注：", areaID, money);
        baccarat_request.GameBaccaratBet({
            BetArea : areaID+1,
            BetScore : money
        });
    }
	
	private initUIEvents() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(0);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area0, function(){ 
            this.onClickArea(0);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area1, function(){ 
            this.onClickArea(1);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area2, function(){ 
            this.onClickArea(2);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area3, function(){ 
            this.onClickArea(3);
		}, this);
		CommonUtil.addClickEvent(this.m_ui.area4, function(){ 
            this.onClickArea(4);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.area5, function(){ 
            this.onClickArea(5);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.area6, function(){ 
            this.onClickArea(6);
        }, this);
        CommonUtil.addClickEvent(this.m_ui.area7, function(){ 
            this.onClickArea(7);
		}, this);
	}
}