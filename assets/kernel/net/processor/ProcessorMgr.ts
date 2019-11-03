import IProcessor from "./IProcessor";
import JsonProcessor from "./JsonProcessor";
import ProtobufProcessor from "./ProtobufProcessor";
import { ProcessorType } from "../../basic/defines/KernelDefine";
import StreamProcessor from "./StreamProcessor";
import LeafTcpProcessor from "./LeafTcpProcessor";
import LeafWsProcessor from "./LeafWsProcessor";

//-----------------------------------------
// 消息处理器总管
//-----------------------------------------
export default class ProcessorMgr {
    private static _instance:ProcessorMgr = null;

    private _all_processors:{[key: string]: IProcessor;} = {};

    public static getInstance() : ProcessorMgr {
        if(!ProcessorMgr._instance) { ProcessorMgr._instance = new ProcessorMgr; }
        return ProcessorMgr._instance;
    }

    private constructor() {

    }

    public createProcessor(key:string, type:ProcessorType) : IProcessor
    {
        if(!this._all_processors[key]) {
            if(type == ProcessorType.Json) 
            {
                this._all_processors[key] = new JsonProcessor(key);
            }
            else if(type == ProcessorType.Protobuff) 
            {
                this._all_processors[key] = new ProtobufProcessor(key);
            }
            else if(type == ProcessorType.Stream) 
            {
                this._all_processors[key] = new StreamProcessor(key);
            }
            else if(type == ProcessorType.LeafTcp)
            {
                this._all_processors[key] = new LeafTcpProcessor(key);
            }
            else if(type == ProcessorType.LeafWs)
            {
                this._all_processors[key] = new LeafWsProcessor(key);
            }
        }
        return this._all_processors[key];
    }

    public getProcessor(key:string) : IProcessor {
        return this._all_processors[key];
    } 
}
