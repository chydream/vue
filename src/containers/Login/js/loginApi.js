import Vue from 'vue'
import { AjaxPlugin } from 'vux'
import * as config from '../../../tools/config'
Vue.use(AjaxPlugin)
export default ({
  getLogin: function (userName, userPwd, type) {
    var paramData = {}
    var body = {}
    paramData.body = body
    body.userName = userName
    body.userPwd = userPwd
    body.type = type
    body.deviceId = 1
    var url = '/SQBusiness/userController/login'
    return Vue.http.post(config.API_ROOT + url, paramData)
  },
  getUserId: function (accessToken) {
    var paramData = {}
    var head = {}
    paramData.head = head
    head.accessToken = accessToken
    var url = '/SQBusiness/userController/selectUserByUserIdOrAccessToken'
    return Vue.http.post(config.API_ROOT + url, paramData)
  }
})
