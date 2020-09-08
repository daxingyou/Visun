import GameManager from "../model/GameManager";
import LoginUser from "../model/LoginUser";
import { GameKindEnum } from "../definer/ConstDefine";
import ChannelDefine from "../definer/ChannelDefine";
import { landLords_msgs } from "../proto/net_landLords";
import { gamecomm_msgs } from "../proto/net_gamecomm";
import { brcowcow_msgs } from "../proto/net_brcowcow";
import { baccarat_msgs } from "../proto/net_baccarat";
import { zhajinhua_msgs } from "../proto/net_zhajinhua";
import ProcessorMgr from "../../../kernel/net/processor/ProcessorMgr";
import SceneManager from "../../../kernel/view/SceneManager";
import KernelUIDefine from "../../../kernel/basic/defines/KernelUIDefine";
import UIManager from "../../../kernel/view/UIManager";
import { gamecomm } from "../../../../declares/gamecomm";
import { brcowcow } from "../../../../declares/brcowcow";
import { baccarat } from "../../../../declares/baccarat";
import { landLords } from "../../../../declares/landLords";
import { zhajinhua } from "../../../../declares/zhajinhua";
import ZjhMgr from "../../../resources/subgames/zjh/script/model/ZjhMgr";
import DDzMgr from "../../../resources/subgames/ddz/script/model/DDzMgr";
import { brtoubao_msgs } from "../proto/net_brtoubao";
import { brtoubao } from "../../../../declares/brtoubao";


var GameHandlers = {

    [gamecomm_msgs.BeOutResp] : function(param:gamecomm.IBeOutResp) {
        UIManager.openDialog("cfg_kick", "你被踢出房间："+param.Hints, 1, function(){
            SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
        });
    },

    [gamecomm_msgs.GoldChangeInfo] : function(param:gamecomm.IGoldChangeInfo) {
        if(param.UserID == LoginUser.getInstance().UserId) {
            LoginUser.getInstance().Gold = param.Gold;
        }
    },


    [gamecomm_msgs.ExitGameResp] : function(param:gamecomm.IExitGameResp) {
        if(param.UserID == LoginUser.getInstance().UserId) {
            SceneManager.turn2Scene(KernelUIDefine.LobbyScene.name);
        }
    },
    
    
	[baccarat_msgs.BaccaratSceneResp] : function(param:baccarat.IBaccaratSceneResp) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
        GameManager.getInstance().enterGameScene(GameKindEnum.Baccarat);
    },
    
    [brtoubao_msgs.BrtoubaoSceneResp] : function(param:brtoubao.IBrtoubaoSceneResp) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
        GameManager.getInstance().enterGameScene(GameKindEnum.Toubao);
	},
	
	[brcowcow_msgs.BrcowcowSceneResp] : function(param:brcowcow.IBrcowcowSceneResp) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
		GameManager.getInstance().enterGameScene(GameKindEnum.BrCowCow);
    },
    
    [zhajinhua_msgs.ZhajinhuaSceneResp] : function(param:zhajinhua.IZhajinhuaSceneResp) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);

        ZjhMgr.delInstance();
        ZjhMgr.getInstance();
        for(var ii in param.Fighters) {
			ZjhMgr.getInstance().addPlayer(param.Fighters[ii]);
        }
        ZjhMgr.getInstance().setEnterData(param);

        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
        GameManager.getInstance().enterGameScene(GameKindEnum.Zhajinhua);
    },

    [landLords_msgs.LandLordsSceneResp] : function(param:landLords.ILandLordsSceneResp) {
        GameManager.getInstance().unregistGameModel();
        GameManager.getInstance().setEnterData(param);

        DDzMgr.delInstance();
        DDzMgr.getInstance().setEnterData(param);
        DDzMgr.getInstance().clearFighters();
        DDzMgr.getInstance().updateFighterList(param.Players);
        for(var i in param.Players) {
            if(param.Players[i].IsBanker) {
                DDzMgr.getInstance().setZhuang(param.Players[i].UserID);
            }
        }

        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(!GameManager.isInGameScene());
        GameManager.getInstance().enterGameScene(GameKindEnum.Landlord);
    },

}

export default GameHandlers;