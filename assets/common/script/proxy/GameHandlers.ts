import { baccarat_msgs } from "../proto/net_baccarat";
import GameManager from "../model/GameManager";
import { GameKindEnum } from "../definer/ConstDefine";
import { landLords_msgs } from "../proto/net_landLords";
import DDzMgr from "../../../resources/subgames/ddz/script/model/DDzMgr";
import { isNil } from "../../../kernel/utils/GlobalFuncs";
import { gamecomm_msgs } from "../proto/net_gamecomm";
import { brcowcow_msgs } from "../proto/net_brcowcow";
import { brcowcow } from "../../../../declares/brcowcow";
import { baccarat } from "../../../../declares/baccarat";
import { landLords } from "../../../../declares/landLords";
import BrnnMgr from "../../../resources/subgames/brnn/script/model/BrnnMgr";
import ProcessorMgr from "../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../definer/ChannelDefine";

var GameHandlers = {

	[gamecomm_msgs.UserList] : function(param) {
        DDzMgr.getInstance().updateFighterList(param && param.AllInfos);
	},
	
	[baccarat_msgs.BaccaratScene] : function(param:baccarat.BaccaratScene) {
        GameManager.getInstance().enterGameScene(GameKindEnum.Baccarat);
	},
	
	[brcowcow_msgs.BrcowcowScene] : function(param:brcowcow.BrcowcowScene) {
        BrnnMgr.getInstance().setEnterData(param);
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(true);
		GameManager.getInstance().enterGameScene(GameKindEnum.BrCowCow);
	},

    [landLords_msgs.LandLordsEnter] : function(param:landLords.LandLordsEnter) {
        DDzMgr.getInstance().EnterData = param;
        DDzMgr.getInstance().clearFighters();
        DDzMgr.getInstance().updateFighterList(param.Players);
        for(var i in param.Players) {
            if(param.Players[i].IsBanker) {
                DDzMgr.getInstance().setZhuang(param.Players[i].UserID);
            }
        }
        if(!isNil(param.BeforeChairID)) {
            var cur = (param.BeforeChairID + 1) % 3;
            for(var i in param.Players) {
                if(param.Players[i].ChairID == cur) {
                    DDzMgr.getInstance().setCurAttacker(param.Players[i].UserID);
                    break;
                }
            }
        }
        GameManager.getInstance().enterGameScene(GameKindEnum.Landlord);
    },
}

export default GameHandlers;