import { PokerCode } from "../definer/PokerDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CpnHandcard extends cc.Component {

    private _touchBegan:cc.Vec3;
    private _touchMoved:cc.Vec3;
    private _nowState:number = 0;

	onLoad() {
		this.node.on(cc.Node.EventType.TOUCH_START, this.touchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoved, this);
    }

    public clearCards() {

    }
    
    public resetCards(cards:Array<PokerCode>) {
        this.clearCards();
        if(cards===null || cards===undefined) {
            return;
        }
        for(var i in cards) {
            this.addCard(cards[i]);
        }
    }

    public delCards(cards:Array<PokerCode>) {
        if(cards===null || cards===undefined) {
            return;
        }
        for(var i in cards) {
            this.delCard(cards[i]);
        }
    }

    private addCard(cardV:PokerCode) {

    }

    private delCard(cardV:PokerCode) {

    }

	private _findTouchedCards (touch:cc.Vec3) : void {
		var cardArr = this.node.children;
        for (var k=0; k<cardArr.length; k++) {
            var box:cc.Rect = cardArr[k].getBoundingBox();
            if (box.contains(cc.v2(touch.x, touch.y))) {
                if(k<cardArr.length-1){
                    if(cardArr[k+1].getBoundingBox().xMin > touch.x){
                        cardArr[k].getComponent("PokerCard").state = this._nowState;
                    }
                }
                else {
                    cardArr[k].getComponent("PokerCard").state = this._nowState;
                }
			}
        }
    }

    private touchBegan(event:any) : void {
        if(this._nowState===0) this._nowState = 1; else this._nowState = 0;
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchBegan = this.node.convertToNodeSpaceAR(touchLoc);
		this._findTouchedCards( this._touchBegan);
    }

    private touchMoved (event:any) : void {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchMoved = this.node.convertToNodeSpaceAR(touchLoc);
        this._findTouchedCards(this._touchMoved);
    }

    private touchEnd (event:any) {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchMoved = this.node.convertToNodeSpaceAR(touchLoc);
        this._findTouchedCards(this._touchMoved);
    }
    
    private touchCancel(event:any) : void {

    }
    
}