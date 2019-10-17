import UIManager from "../../../../kernel/view/UIManager";
import BaseComponent from "../../../../kernel/view/BaseComponent";
import AudioManager from "../../../../kernel/audio/AudioManager";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import LogicCenter from "../../../../common/script/model/LogicCenter";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyScene extends BaseComponent {

    onLoad () {
        LogicCenter.getInstance().init();
        UIManager.openPanel(ViewDefine.LobbyUI.path, null);
    }

    start () {
        AudioManager.getInstance().playMusicSync("lobby/music/denglu", true);
    }

    // update (dt) {}
}
