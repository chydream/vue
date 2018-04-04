import Vue from 'vue'
import { AjaxPlugin } from 'vux'
import * as config from '../../../tools/config'
Vue.use(AjaxPlugin)
export default ({
  // 查询大事记
  selectDateBook: function (userId, beforeDate, afterDate, mainProblemValue) {
    var paramData = {}
    var body = {}
    paramData.body = body
    body.userId = userId
    body.beforeDate = beforeDate
    body.afterDate = afterDate
    body.mainProblemValue = mainProblemValue
    // console.log(paramData)
    var url = '/SQBusiness/replayController/selectBigEvent'
    return Vue.http.post(config.API_ROOT + url, paramData)
  },
  // 插入大事记
  addDateBook: function (sqToolFpBigevent) {
    var paramData = {}
    var body = {}
    paramData.body = body
    body.sqToolFpBigevent = sqToolFpBigevent
    // console.log(JSON.stringify(paramData))
    var url = '/SQBusiness/replayController/insertSelective'
    return Vue.http.post(config.API_ROOT + url, paramData)
  },
  // 查询大事记可能情况
  selectMainProblem: function () {
    var paramData = {}
    var body = {}
    paramData.body = body
    var url = '/SQBusiness/replayController/selectMainProblem'
    return Vue.http.post(config.API_ROOT + url, paramData)
  },
  // 评论
  commentDateBook: function (accessToken, topicId, replyContent, type) {
    var paramData = {}
    var body = {}
    var head = {}
    paramData.head = head
    paramData.body = body
    head.accessToken = accessToken
    body.topicId = topicId
    body.replyContent = replyContent
    body.type = type
    // console.log(paramData)
    var url = '/SQBusiness/replayController/insertReply'
    return Vue.http.post(config.API_ROOT + url, paramData)
  },
  // 上传图片
  uploadTempletImg: function (base64Data) {
    var body = {}
    var paramData = {}
    paramData.body = body
    body.base64Data = base64Data
    var url = '/SQBusiness/fileUploadController/uploadBase64'
    return Vue.http.post(config.API_ROOT + url, paramData)
  },
  // 删除大事记
  deleteDateBook: function (id) {
    var body = {}
    var paramData = {}
    paramData.body = body
    body.id = id
    var url = '/SQBusiness/replayController/deleteBigEvent'
    return Vue.http.post(config.API_ROOT + url, paramData)
  },
  // 大事记详情
  selectByBigEventId: function (id) {
    var body = {}
    var paramData = {}
    paramData.body = body
    body.id = id
    var url = '/SQBusiness/replayController/selectByBigEventId'
    return Vue.http.post(config.API_ROOT + url, paramData)
  }
})
