import { login_msgs } from "../proto/net_login";
import UIManager from "../../../kernel/view/UIManager";
import LoginUser from "../model/LoginUser";
import CommonUtil from "../../../kernel/utils/CommonUtil";

//---------------------------------
// login响应句柄
//---------------------------------

var proxy_login = {

    [login_msgs.RespRegister] : function(param: any) {
        UIManager.toast(param.Hints);
    },

    [login_msgs.RespLogin] : function(param: any) {
        UIManager.toast(param.Hints);
    },

    [login_msgs.UserInfo] : function(param: any) {
        CommonUtil.simpleCopy(LoginUser.getInstance(), param);
    },

}

export default proxy_login;