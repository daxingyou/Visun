//---------------------------------
// 仿js promise，将过程组织成树形结构，自根往叶播放
//---------------------------------
import CHandler from "./CHandler";
import PlayUnit from "./PlayUnit";
import { PROCEDURE_STATE } from "../looker/KernelDefine";


export default class Procedure {
	private _node_type:string = "unknown";
	private _cur_state:PROCEDURE_STATE = PROCEDURE_STATE.READY;
	private _bAutoClean:boolean = false;

	private _procFunc:CHandler = null;
	private _stopFunc:CHandler = null;
	
	private _belongTo:Procedure = null;
	private _next:Procedure = null;
	private _partList:Array<Procedure> = null;



	public constructor(procFunc:CHandler=null, stopFunc:CHandler=null) 
	{
		this._procFunc = procFunc;
		this._stopFunc = stopFunc;
	}

	private clean() : void 
	{
		this._procFunc = null;
		this._stopFunc = null;
		if(this._partList){
			this._partList.length = 0;
			this._partList = null;
		}
	}



	public setStopFunc(stop_func:CHandler) : Procedure 
	{
		this._stopFunc = stop_func;
		return this;
	}

	public setProcFunc(proc_func:CHandler) : Procedure 
	{
		this._procFunc = proc_func;
		return this;
	}

	public setPlayUnit(playUnit:PlayUnit) : Procedure 
	{
		this._procFunc = new CHandler(playUnit.play, playUnit);
		this._stopFunc = new CHandler(playUnit.stop, playUnit);
		return this;
	}



	public addPart(part:Procedure) : Procedure 
	{
		part._belongTo = this;
		if(!this._partList) { this._partList = []; }
		this._partList.push(part);
		return this;
	}

	public addPartCaller(procFunc:CHandler, stopFunc:CHandler=null) : Procedure 
	{
		var part = new Procedure(procFunc, stopFunc);
		part._belongTo = this;
		if(!this._partList) { this._partList = []; }
		this._partList.push(part);
		return this;
	}



	public then(nextNode:Procedure) : Procedure 
	{
		var last = this.getLast();
		nextNode._belongTo = last._belongTo;
		last._next = nextNode;
		return nextNode;
	}

	public thenCaller(procFunc:CHandler, stopFunc:CHandler|null=null) : Procedure 
	{
		var nextNode = new Procedure(procFunc, stopFunc);
		return this.then(nextNode);
	}

	public thenFunc(fn:Function, target:any, ...args:any[]) : Procedure 
	{
		var procFunc:CHandler = new CHandler(fn, target, ...args);
		var nextNode = new Procedure(procFunc);
		return this.then(nextNode);
	}

	
	protected onProc() {
		if(this._procFunc) {
			this._procFunc.call(this);
		}
		else {
			this._cur_state = PROCEDURE_STATE.DONE;
		}
	}

	public run() : PROCEDURE_STATE 
	{
		if(this._cur_state === PROCEDURE_STATE.READY) {
			this._cur_state = PROCEDURE_STATE.RUNNING;
			this.onProc();
		}
		
		if(this._partList) {
			for(var i in this._partList) {
				this._partList[i].run();
			}
		}

		if(this._next) {
			if(this.isFinished() && this.isPartsDone()) {
				this._next._belongTo = this._belongTo;
				return this._next.run();
			}
		}
	}

	public onPartFinished() : void 
	{
		if (this.isFinished()) {
			if(this._next) {
				if(this.isPartsDone()) {
					this._next._belongTo = this._belongTo;
					this._next.run();
				}
			}
			else if(this.isPartsDone()) {
				cc.log("本Procedure执行完成，整个Procedure执行完成");
			}
		}
		
	}

	public resolve() : void 
	{
		if(this.isFinished()) { return; }

		this._cur_state = PROCEDURE_STATE.DONE;

		if(this._bAutoClean) { this.clean(); }

		if(this._belongTo) {
			return this._belongTo.onPartFinished();
		}
		else if(this._next) {
			if(this.isPartsDone()) {
				this._next._belongTo = this._belongTo;
				this._next.run();
				return;
			}
		}

		cc.log("本Procedure执行完成，整个Procedure执行完成");
	}

	public onStop() {
		if(this._stopFunc){
			this._stopFunc.call(this);
		}
	}

	public stop() : void 
	{
		if( !this.isFinished() ) {
			this._cur_state = PROCEDURE_STATE.STOPED;
			this.onStop();
			if(this._partList) {
				for(var i in this._partList) {
					this._partList[i].stop();
				}
			}
			if(this._bAutoClean) { this.clean(); }
		}
		
		if(this._next) { 
			this._next.stop(); 
		}
	}



	public getLast() : Procedure 
	{
		var last:Procedure = this;
		while(last._next) {
			last = last._next;
		}
		return last;
	}

	public isFinished() : boolean 
	{
		return this._cur_state === PROCEDURE_STATE.DONE || this._cur_state === PROCEDURE_STATE.STOPED;
	}

	public isPartsDone() : boolean 
	{
		if(this._partList) {
			for(var i in this._partList) {
				if(!this._partList[i].isDone()){
					return false;
				}
			}
		}
		return true;
	}
	
	public isDone() : boolean 
	{
		if(!this.isFinished()) { return false; }
		if(this._partList) {
			for(var i in this._partList) {
				if(!this._partList[i].isDone()){
					return false;
				}
			}
		}
		if(this._next) { 
			if(!this._next.isDone()) { 
				return false; 
			} 
		}
		return true;
	}

	public getType() : string 
	{
		return this._node_type;
	}
	
}
