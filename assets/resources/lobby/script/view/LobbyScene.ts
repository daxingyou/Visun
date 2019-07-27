import UIManager from "../../../../Script/kernel/manager/UIManager";
import BaseComp from "../../../../Script/launcher/view/BaseComp";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends BaseComp {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        UIManager.showPanel("lobby/prefabs/LobbyUI", null);
    }

    start () {
        cc.loader.loadRes("lobby/music/denglu", cc.AudioClip, (err, audioclip) => {
            if (err) {
                cc.log("音频加载失败"+err);
                return;
            }
            cc.log("播放音频：", audioclip)
            cc.audioEngine.playMusic(audioclip, true);
        });
    }

    // update (dt) {}
}