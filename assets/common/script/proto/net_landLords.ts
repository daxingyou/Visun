//---------------------------------
//该文件自动生成，请勿手动更改
//---------------------------------
import { landLords } from "./landLords";
import ChannelDefine from "../definer/ChannelDefine";
import LeafWsPacket from "../../../kernel/net/packet/LeafWsPacket";


export enum landLords_msgs {
    GameLandLordsEnter = 84,
    GameLandLordsPlayer = 85,
    GameLandLordsDeal = 86,
    GameLandLordsCall = 87,
    GameLandLordsDouble = 88,
    GameLandLordsTrustee = 89,
    GameLandLordsBottomCard = 90,
    GameLandLordsOutCard = 91,
    GameLandLordsAward = 92,
    GameLandLordsCheckout = 93,
}

export var landLords_packet_define = {
    84: new LeafWsPacket(84, landLords.GameLandLordsEnter, "landLords.GameLandLordsEnter"),
    85: new LeafWsPacket(85, landLords.GameLandLordsPlayer, "landLords.GameLandLordsPlayer"),
    86: new LeafWsPacket(86, landLords.GameLandLordsDeal, "landLords.GameLandLordsDeal"),
    87: new LeafWsPacket(87, landLords.GameLandLordsCall, "landLords.GameLandLordsCall"),
    88: new LeafWsPacket(88, landLords.GameLandLordsDouble, "landLords.GameLandLordsDouble"),
    89: new LeafWsPacket(89, landLords.GameLandLordsTrustee, "landLords.GameLandLordsTrustee"),
    90: new LeafWsPacket(90, landLords.GameLandLordsBottomCard, "landLords.GameLandLordsBottomCard"),
    91: new LeafWsPacket(91, landLords.GameLandLordsOutCard, "landLords.GameLandLordsOutCard"),
    92: new LeafWsPacket(92, landLords.GameLandLordsAward, "landLords.GameLandLordsAward"),
    93: new LeafWsPacket(93, landLords.GameLandLordsCheckout, "landLords.GameLandLordsCheckout"),
}

export class landLords_request {
    public static GameLandLordsEnter( data:{ TimeStamp:number, FreeTime:number, OutTime:number, CallTime:number, Free:any, Start:any, Call:any, Playing:any, Over:any, BeforeChairID:number, BeforeCards:any, Players:any[] } ) { landLords_packet_define[84].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsPlayer( data:{ UserID:number, ChairID:number, CardsLen:number, Cards:any, IsBanker:any, IsTrustee:any } ) { landLords_packet_define[85].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDeal( data:{ UserID:number, CardsHand:any } ) { landLords_packet_define[86].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCall( data:{ UserID:number, Score:number } ) { landLords_packet_define[87].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsDouble( data:{ UserID:number, Number:number } ) { landLords_packet_define[88].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsTrustee( data:{ UserID:number, IsTrustee:any } ) { landLords_packet_define[89].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsBottomCard( data:{ UserID:number, CardsBottom:any } ) { landLords_packet_define[90].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsOutCard( data:{ UserID:number, Cards:any, Hints:string } ) { landLords_packet_define[91].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsAward( data:{ UserID:number, Codes:any, GetGold:number } ) { landLords_packet_define[92].sendToChannel(ChannelDefine.game, data, false); }
    public static GameLandLordsCheckout( data:{ players:any[] } ) { landLords_packet_define[93].sendToChannel(ChannelDefine.game, data, false); }
}

