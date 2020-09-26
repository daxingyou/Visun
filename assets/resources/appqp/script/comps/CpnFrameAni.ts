const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnFrameAni extends cc.Component {
    private ani_name:string = "";
    private total_frame:number = 0;
    private cur_frame:number = 0;
    private _frames:Array<string> = [];
    private _sprNode:cc.Sprite = null;
    private _stepN:number = 5;

    onLoad () {
        this._sprNode = this.node.getComponent(cc.Sprite);
    }

    setAni(aniName:string, totalFrame:number, curFrame:number=0) {
        this.ani_name = aniName;
        this.total_frame = totalFrame;
        this.cur_frame = curFrame;
        for(var i=0; i<this.total_frame; i++) {
            this._frames[i] = "appqp/frameanis/"+this.ani_name+"/"+this.ani_name+i;
            cc.loader.loadRes(this._frames[i], cc.SpriteFrame);
        }
    }

    update (dt) {
        if(this.total_frame <= 0) { return; }
        if(this._stepN > 0) {
            this._stepN--;
            return;
        }
        this._stepN = 5;
        
        var rsc = cc.loader.getRes(this._frames[this.cur_frame], cc.SpriteFrame);
        if(rsc) {
            this._sprNode.spriteFrame = rsc;
            this.cur_frame++;
            if(this.cur_frame >= this.total_frame) {
                this.cur_frame = 0;
            }
        }
    }
}
