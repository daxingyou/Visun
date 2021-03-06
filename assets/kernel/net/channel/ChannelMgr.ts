//--------------------------------------
// 网络通道管理器
//--------------------------------------
import IChannel from "./IChannel";
import WsChannel from "./WsChannel";
import TcpChannel from "./TcpChannel";
import HttpChannel from "./HttpChannel";
import { ChannelType } from "../../basic/defines/KernelDefine";

export default class ChannelMgr {
    private static _instance:ChannelMgr = null;
    private _channels:{[key: string]: IChannel;} = {};

    private constructor() {
        
    }

    public static getInstance() : ChannelMgr
    {
        if(!ChannelMgr._instance){ ChannelMgr._instance = new ChannelMgr; }
        return ChannelMgr._instance;
    }

    public getChannel(key:string) : IChannel 
    {
        return this._channels[key];
    }

    public delChannel(key:string) : void
    {
        if(this._channels[key]) {
            this._channels[key].destroy();
            this._channels[key] = null;
        }
    }

    public createChannel(key:string, chanType:ChannelType) : IChannel
    {
        if(this._channels[key]) {
            return this._channels[key];
        }

        if(chanType === ChannelType.Ws){
            this._channels[key] = new WsChannel(key);
        }
        else if(chanType === ChannelType.Tcp) {
            this._channels[key] = new TcpChannel(key);
        }
        else if(chanType === ChannelType.Http) {
            this._channels[key] = new HttpChannel(key);
        }

        return this._channels[key];
    }

}
