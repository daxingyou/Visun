import { ActionNode } from "../BehaviorNode";
import RoleAgent from "../RoleAgent";
import { BEHAVIOR_STATE } from "../../basic/defines/KernelDefine";

export default class Rest extends ActionNode{
	protected clsName:string = "Rest";
	private restTime:number;

	public constructor(restTime:number) {
		super();
		this.restTime = restTime;
	}

	public Proc(role:RoleAgent) : BEHAVIOR_STATE{
		return role.ProcRest(this.restTime);
	}
}