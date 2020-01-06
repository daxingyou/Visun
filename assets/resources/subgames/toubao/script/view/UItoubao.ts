import BaseComponent from "../../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../../common/script/model/GameManager";
import SimplePool from "../../../../../kernel/basic/pool/SimplePool";
import CpnChipbox3d from "../../../../../common/script/comps/CpnChipbox3d";
import ViewDefine from "../../../../../common/script/definer/ViewDefine";
import AudioManager from "../../../../../kernel/audio/AudioManager";
import { BaseTimer } from "../../../../../kernel/basic/timer/BaseTimer";
import CpnGameState from "../../../../../common/script/comps/CpnGameState";
import CpnHandcard from "../../../../../common/script/comps/CpnHandcard";
import TimerManager from "../../../../../kernel/basic/timer/TimerManager";
import CHandler from "../../../../../kernel/basic/datastruct/CHandler";
import { PokerCode } from "../../../../../common/script/definer/PokerDefine";
import CpnChip from "../../../../../common/script/comps/CpnChip";
import GameUtil from "../../../../../common/script/utils/GameUtil";
import { brcowcow_request, brcowcow_msgs } from "../../../../../common/script/proto/net_brcowcow";
import EventCenter from "../../../../../kernel/basic/event/EventCenter";


var margin = { rx:10, ry:10 };
var testdata = [ 
	{AreaId:0,Money:5280},
	{AreaId:1,Money:5280},
	{AreaId:2,Money:8650},
	{AreaId:3,Money:6455},
	{AreaId:4,Money:4255},
	{AreaId:5,Money:5280},
	{AreaId:6,Money:5280},
	{AreaId:7,Money:8650},
	{AreaId:8,Money:6455},
	{AreaId:9,Money:4255},
	{AreaId:10,Money:5280},
	{AreaId:11,Money:5280},
	{AreaId:12,Money:8650},
	{AreaId:13,Money:6455},
	{AreaId:14,Money:4255},
	{AreaId:15,Money:5280},
	{AreaId:16,Money:5280},
	{AreaId:17,Money:8650},
	{AreaId:18,Money:6455},
	{AreaId:19,Money:4255},
	{AreaId:20,Money:5280},
	{AreaId:21,Money:5280},
	{AreaId:22,Money:8650},
	{AreaId:23,Money:6455},
	{AreaId:24,Money:4255},
];

const {ccclass, property} = cc._decorator;

@ccclass
export default class ToubaoUI extends BaseComponent {

	compBox:CpnChipbox3d = null;
	_rule:number[] = [5,10,50,100,500];
	private tmrState = 0;

	_loadedRes:any;
	_pool:SimplePool = new SimplePool(():cc.Node=>{
		var obj = cc.instantiate(this._loadedRes);
		obj.scale = 0.4;
		return obj;
	});
	
	onLoad() {
		CommonUtil.traverseNodes(this.node, this.m_ui);

		var self = this;
		cc.loader.loadRes(ViewDefine.CpnChip, cc.Prefab, function (err, loadedRes) {
			if(err) { cc.log("error: "+err); return; }
			if(!cc.isValid(self)) { return; }
			self._loadedRes = loadedRes;
		});

		this.compBox = this.m_ui.CpnChipbox3d.getComponent(CpnChipbox3d);

		this.initNetEvent();
		this.initUIEvent();

		this.toStateReady();

		AudioManager.getInstance().playMusicAsync("common/audios/music_bg", true);
	}

	onDestroy(){
		this._pool.clear();
		super.onDestroy();
	}
	
	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame(0);
		}, this);
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
		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 10, new CHandler(this, this.onStateTimer), true);
		TimerManager.loopSecond(1, 9, new CHandler(this, this.onPlayersBet));
		TimerManager.loopSecond(10, 1, new CHandler(this, (tmr:BaseTimer)=>{
			this.toStateJiesuan();
		}));
		AudioManager.getInstance().playEffectAsync("common/audios/startbet", false);
	}

	//结算阶段
	private toStateJiesuan() {
		AudioManager.getInstance().playEffectAsync("common/audios/endbet", false);

	//	this.m_ui.CpnGameState.getComponent(CpnGameState).setState(4);

		AudioManager.getInstance().playEffectAsync("common/audios/collect", false);
		var self = this;
		this.m_ui.chipLayer.runAction(cc.sequence(
			cc.delayTime(1),
			cc.callFunc(function(){
				var childs = this.m_ui.chipLayer.children
				var len = childs.length;
				for(var i=len-1; i>=0; i--){
					var pos = CommonUtil.convertSpaceAR(this.m_ui["betBtn"+childs[i].__areaId], this.m_ui.chipLayer);
					childs[i].runAction(cc.sequence(
						cc.moveTo(0.3, cc.v2(pos.x, pos.y)),
						cc.callFunc(function(obj){
							self._pool.delObject(obj);
						}, childs[i])
					))
				}
			}, this)
		));

		TimerManager.delTimer(this.tmrState);
		this.tmrState = TimerManager.loopSecond(1, 3, new CHandler(this, this.onStateTimer), true);
		TimerManager.loopSecond(3, 1, new CHandler(this, ()=>{
			this.toStateReady();
		}));
	}

	private onPlayersBet(tmr:BaseTimer, param:any) {
		if(tmr.getRemainTimes() < 3) {
			AudioManager.getInstance().playEffectAsync("common/audios/lastsecond", false);
		} 
		AudioManager.getInstance().playEffectAsync("common/audios/countdown", false);
		AudioManager.getInstance().playEffectAsync("common/audios/chipmove", false);
		param = param || testdata;
		for(var i in param) {
			var info = param[i];
			var nums = GameUtil.parseChip(info.Money, this._rule);
			for(var j in nums) {
				var chip = this._pool.newObject();
				chip.getComponent(CpnChip).setChipValue(nums[j], true);
				this.m_ui.chipLayer.addChild(chip);
				chip.__areaId = info.AreaId;
				GameUtil.bezierTo1(chip, this.m_ui.btnPlayerlist, this.m_ui["betBtn"+info.AreaId], 0.14+0.02*info.AreaId, parseInt(j)*0.01, margin);
			}
		}
	}

	private initNetEvent() {
		
	}
}