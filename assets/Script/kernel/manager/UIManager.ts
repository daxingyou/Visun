import * as Consts from "../../looker/Consts";
import CommonUtils from "../utils/CommonUtils";
import BaseComp from "../../launcher/view/BaseComp";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIManager extends BaseComp {
	private static _allUI:object = {};
	private static _toastList:any[] = [];

	public static initWindow(layerId:Consts.LAYER, prefabName:string, bModal:boolean, bCloseWhenClickMask:boolean, callback:Function) {
		if(cc.isValid(UIManager._allUI[prefabName])){
			cc.log("allready exist: ", prefabName);
			if(callback) { callback.apply(UIManager._allUI[prefabName]); }
			return;
		}
		
		cc.loader.loadRes(prefabName, cc.Prefab, 
			function(completeCnt:number, totalCnt:number, item:any){
				cc.log("进度: ", completeCnt, totalCnt);
			}, 
			function(errorMessage, loadedResource){
				if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
				if( !( loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; } 

				var cvs = cc.find("Canvas");
				if( !cvs ) { cc.log("没有Canvas"); return; }

				var obj = cc.instantiate(loadedResource);
				
				if(obj) {
					if(bModal){ CommonUtils.setModal(obj, bCloseWhenClickMask); }
					cvs.addChild(obj, layerId);
					UIManager._allUI[prefabName] = obj;
					// if(layerId===Consts.LAYER.Panel) {
					// 	UIManager.hidePanelsExcept(obj);
					// }
					if(callback) { callback.apply(obj); }
				}
			} 
			);
	}

	public static showPanel(prefabName:string, callback:Function) {
		this.initWindow(Consts.LAYER.Panel, prefabName, true, false, callback);
	}
	
	public static showPopwnd(prefabName:string, callback:Function) {
		this.initWindow(Consts.LAYER.Popup, prefabName, true, true, callback);
	}
	
	public static showDialog(prefabName:string, callback:Function) {
		this.initWindow(Consts.LAYER.Dialog, prefabName, true, false, callback);
	}

	public static hidePanelsExcept(obj) {
		for( var k in this._allUI) {
			if(this._allUI[k] !== obj) {
				this._allUI[k].active = false;
			}
		}
	}
	
	
	public static toast(content:string) {
		var completeCallback = function(errorMessage, loadedResource) {
			if( errorMessage ) { cc.log( '载入预制资源失败:' + errorMessage ); return; }
			var cvs = cc.find("Canvas");
			if( !cvs ) { cc.log("没有Canvas"); return; }
			var obj = cc.instantiate(loadedResource);
			if(!obj) { cc.log("实例化失败"); return; }
			
			//往上挪
			var idx = 1;
			for(var j=UIManager._toastList.length-1; j>=0; j--){
				UIManager._toastList[j].y = 38*idx;
				idx++;
			}
			//插入
			cvs.addChild(obj, Consts.LAYER.Tips);
			UIManager._toastList.push(obj);
			obj.y = 0;
			//刷新数据并定时销毁
			var scriptCpn = obj.getComponent("Toast");
			scriptCpn.setContent(content);
			scriptCpn.scheduleOnce(function() {
				for(var i=0; i<UIManager._toastList.length; i++) {
					if(UIManager._toastList[i]===obj) {
						UIManager._toastList.splice(i,1);
						break;
					}
				}
				this.node.destroy();
			}, 2);
		}
		cc.loader.loadRes("launcher/prefabs/Toast", cc.Prefab, completeCallback);
	}
	
	public static announce() {
		
	}
	
	public static barrage() {
		
	}
}
