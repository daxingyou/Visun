//------------------------------
// 行为树
//------------------------------
import BehaviorNodeBase from "./BehaviorNode";
import RoleAgent from "./RoleAgent";
import { BEHAVIOR_STATE } from "../basic/defines/KernelDefine";


export default class BehaviorTree {
	protected clsName:string = "BehaviorTree";
	private mRootNode:BehaviorNodeBase;

	//名字KEY
	public getName() : string {
		return this.clsName;
	}
	
	//设置根节点
	public setRootNode(rootNode:BehaviorNodeBase) {
		this.mRootNode = rootNode;
		rootNode.setBTTree(this);
	}

	//是否在执行中
	public isRunning(role:RoleAgent) : boolean {
		return role.getBlackboard().hasRunningTree(this);
	}

	//执行
	public Execute(role:RoleAgent, Callback:Function) : BEHAVIOR_STATE {
		if(this.isRunning(role)){
			console.log("正在执行中：", this.clsName);
			return BEHAVIOR_STATE.RUNNING;
		}
		role.getBlackboard().tellBTBegin(this, Callback);
		return this.mRootNode.Execute(role);
	}

	//中断执行
	public Interrupt(role:RoleAgent) {
		let running_nodes = role.getBlackboard().getRunningNodesOfTree(this);
		if (running_nodes != null) {
			role.getBlackboard().markInterrupting(this, true);
			for(let dealingNode of running_nodes) {
				dealingNode.Interrupt(role);
			}
			role.getBlackboard().markInterrupting(this, false);

			role.getBlackboard().tellBTInterrupt(this, BEHAVIOR_STATE.FAIL);
		}
	}
	
}