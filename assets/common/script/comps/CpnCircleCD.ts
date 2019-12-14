const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnCircleCD extends cc.Component {

    _running:boolean = false;
    _remainCD:number = 0;
    _totalCD:number = 1;

    start() {
        this.setRemainCD(10, 10);
        this._running = true;
    }

    setRemainCD(totalSec:number, remainSec:number) {
        this._remainCD = remainSec;
        this._totalCD = totalSec;
    }

    serRunning(b:boolean) {
        this._running = b;
    }

    update (dt) {
        if(this._running && this._remainCD > 0) {
            this._remainCD -= dt;
            if(this._remainCD < 0) { this._remainCD = 0; }
            this.getComponent(cc.ProgressBar).progress = 1 - this._remainCD/this._totalCD;
        }
    }
    
}