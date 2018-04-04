<template>
  <div class="date-book-index">
    <loading v-model="isLoading"></loading>
    <div class="time-select">
      <group class="time-years fl">
        <datetime format="YYYY" v-model="year" @on-change="getYearsData"></datetime>
      </group>
      <scroller lock-y :scrollbar-x=false>
        <div class="time-months">
          <ul class="list-month">
            <li :class="{active:activeIndex === index}" v-for="(month,index) in months" :key="index" @click="getMonthList(index,month)"><span>{{month}}月</span></li>
          </ul>
        </div>
      </scroller>
    </div>
    <div class="date-section-head">
        <h3>新增大事记</h3>
        <i class="icon-2" @click="addNew"></i>
    </div>
    <div class="date-section-head">
        <h3>可能情况</h3>
    </div>
    <div class="date-section-body">
        <ul class="list-option">
          <li :class="{active:possibleIndex === index}" v-for="(possible,index) in goodsMainProblems" :key="index" @click="getMainProblems(index, possible.value)">
            <span>{{possible.name}}</span>
          </li>
        </ul>
    </div>
    <div class="date-section-head bt-1">
        <h3>{{pageTitle}}</h3>
    </div>
    <div class="date-section-body fix-padding" v-for="(item,index) in dateBooks" :key="index" style="margin-bottom:10px;">
      <scroller lock-y :scrollbar-x=false>
        <div class="img-wrap">
          <ul class="list-img">
            <li v-for="(img,index) in item.imgLists" :key="index"><img :src="rootUrl+img"></li>
          </ul>
        </div>
      </scroller>
      <h4><em class="fr">{{item.createTime}}</em><span class="title" @click="goChild(item.id)">{{item.title}}</span></h4>
      <div class="date-con">
        <span class="fl">{{item.realName}}</span>
        <div class="date-detail">
          <p>{{item.description}}</p>
          <p><i class="icon-comment fr" @click="showComment(index)"></i><em class="tag">{{item.problem}}</em><em @click="deleteDateBook(item.id)">删除</em></p>
        </div>
      </div>
      <div class="comment-texa" v-show="commentIndex == index">
        <textarea class="input-texa" v-model="replyContent"></textarea>
        <p class="text-right"><button class="post-comment" @click="postComent(item.id)">发表</button></p>
      </div>
      <div class="date-comment" v-show="item.replayList.length>0">
        <ul class="list-comment">
          <li v-for="(coment,index) in item.replayList" :key="index"><p><span>{{item.realName}}：</span>{{coment.replyContent}}</p></li>
        </ul>
      </div>
    </div>
    <input type="hidden" value="index" id="homeWrap">
  </div>
</template>

<script>
import { Group, Cell, Tab, TabItem, Swiper, SwiperItem, XButton, XHeader, Datetime, Scroller, Loading } from 'vux'
import { mapState } from 'vuex'
import LoadingPublic from '../Public/LoadingPublic'
import * as config from '../../tools/config'
export default {
  components: {
    Group,
    Cell,
    LoadingPublic,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    XButton,
    XHeader,
    Datetime,
    Scroller,
    Loading
  },
  data () {
    return {
      rootUrl: config.API_ROOT,
      activeIndex: 0,
      possibleIndex: 0,
      commentIndex: -1,
      year: '2018',
      menus: ['数据', '小结', '大数据'],
      isLoading: true,
      isComment: false,
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      goodsMainProblems: [{'name': '全部', 'value': ''}],
      mainProblemsId: '',
      pageTitle: '大事记',
      replyContent: '',
      beforeDate: '',
      afterDate: '',
      dateBooks: [
        // {
        //   imgLists: [
        //     require('./images/img-1.png'), require('./images/img-1.png'), require('./images/img-1.png')
        //   ],
        //   createTime: '2017.11.12',
        //   title: '这是标题这是标题',
        //   createUserId: '张三',
        //   description: '渠道利润增厚，出厂价提升空间打开。 受益于外部环境景气+茅五泸价格上行打开空间，洋河海天梦系列一批价逐步提升， 渠道利润不断增',
        //   problem: '毛利环比',
        //   replayList: [
        //     {
        //       replyUserId: '麦穗',
        //       replyContent: '哈哈，说得有理'
        //     }
        //   ]
        // }
      ]
    }
  },
  computed: {
    ...mapState({
      baseUrl: state => state.common.baseUrl
    })
  },
  created () {
    var currentDate = new Date()
    var firstDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    var nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1)
    var beforeDateStr = firstDate.getFullYear() + '-' + (firstDate.getMonth() + 1) + '-' + firstDate.getDate()
    var afterDateStr = nextDate.getFullYear() + '-' + (nextDate.getMonth() + 1) + '-' + nextDate.getDate()
    var nYear = currentDate.getFullYear()
    this.year = nYear.toString()
    this.beforeDate = beforeDateStr
    this.afterDate = afterDateStr
    var monthNow = currentDate.getMonth() + 1
    this.activeIndex = monthNow - 1
    var self = this
    var userId = localStorage.getItem('userId')
    var beforeDate = this.beforeDate
    var afterDate = this.afterDate
    // console.log(beforeDate)
    // console.log(afterDate)
    this.dateBookApi.selectDateBook(userId, beforeDate, afterDate, '').then((response) => {
      if (response.data.body.code === 0) {
        var responseData = response.data.body.data.bigEvent
        self.dateBooks = responseData
        for (var i = 0; i < self.dateBooks.length; i++) {
          self.dateBooks[i].imgLists = responseData[i].img.split(',')
          // self.dateBooks[i].createTime = (new Date(responseData[i].createTime)).getFullYear() + '-' + (((new Date(responseData[i].createTime)).getMonth() + 1) < 10 ? '0' + ((new Date(responseData[i].createTime)).getMonth() + 1) : ((new Date(responseData[i].createTime)).getMonth() + 1)) + '-' + ((new Date(responseData[i].createTime)).getDate() < 10 ? '0' + (new Date(responseData[i].createTime)).getDate() : (new Date(responseData[i].createTime)).getDate())
          self.dateBooks[i].createTime = responseData[i].createTime.split(' ')[0]
          if (responseData[i].replayList) {
            self.dateBooks[i].replayList = responseData[i].replayList
          } else {
            self.dateBooks[i].replayList = []
          }
        }
      }
      self.isLoading = false
    })
    self.dateBookApi.selectMainProblem().then((response) => {
      // console.log(self.goodsMainProblems)
      // console.log(response.data.body.data.mainList)
      self.goodsMainProblems = self.goodsMainProblems.concat(response.data.body.data.mainList)
      // console.log(self.goodsMainProblems)
    })
  },
  mounted () {
    // var self = this
    // setTimeout(() => {
    //   self.isLoading = false
    // }, 1000)
  },
  methods: {
    activeCondition: function (index) {
      this.activeIndex = index
    },
    addNew () {
      this.$router.push('/addDateBook')
    },
    showComment (index) {
      // this.isComment = !this.isComment
      this.commentIndex = index
    },
    postComent (id) {
      var accessToken = localStorage.getItem('accessToken')
      var replyContent = this.replyContent
      this.dateBookApi.commentDateBook(accessToken, id, replyContent, 2).then((response) => {
        // console.log(response.data)
        if (response.data.body.code === 0) {
          this.$vux.toast.show({
            text: '评论成功',
            type: 'text',
            width: '140px'
          })
          var i = this.getArrIndex(this.dateBooks, id)
          this.dateBooks[i].replayList.push({replyContent: replyContent})
          // this.$router.go(0)
          window.location.reload()
        } else {
          this.$vux.toast.show({
            text: '服务器出错',
            type: 'text',
            width: '140px'
          })
        }
      }, (res) => {
        this.$vux.toast.show({
          text: '服务器出错',
          type: 'text',
          width: '140px'
        })
      })
      // this.isComment = false
    },
    getMonthList (index, month) {
      this.isLoading = true
      this.activeIndex = index
      var self = this
      var userId = localStorage.getItem('userId')
      var last = new Date(this.year, month, 0)
      var current = new Date(this.year, month, 1)
      var currentFilter = current.getDate() < 10 ? '0' + current.getDate() : current.getDate()
      var lastFilter = last.getDate() < 10 ? '0' + last.getDate() : last.getDate()
      var monthCurrentFilter = current.getMonth() < 10 ? '0' + current.getMonth() : current.getMonth()
      var monthLastFilter = (last.getMonth() + 1) < 10 ? '0' + (last.getMonth() + 1) : (last.getMonth() + 1)
      var currentDate = current.getFullYear() + '-' + monthCurrentFilter + '-' + currentFilter
      var lastDate = last.getFullYear() + '-' + monthLastFilter + '-' + lastFilter
      var beforeDate = currentDate
      var afterDate = lastDate
      this.beforeDate = beforeDate
      this.afterDate = afterDate
      // console.log(beforeDate)
      // console.log(afterDate)
      this.dateBookApi.selectDateBook(userId, beforeDate, afterDate, this.mainProblemsId).then((response) => {
        // console.log(response.data)
        if (response.data.body.code === 0) {
          var responseData = response.data.body.data.bigEvent
          self.dateBooks = responseData
          for (var i = 0; i < self.dateBooks.length; i++) {
            self.dateBooks[i].imgLists = responseData[i].img.split(',')
            // self.dateBooks[i].createTime = (new Date(responseData[i].createTime)).getFullYear() + '-' + (((new Date(responseData[i].createTime)).getMonth() + 1) < 10 ? '0' + ((new Date(responseData[i].createTime)).getMonth() + 1) : ((new Date(responseData[i].createTime)).getMonth() + 1)) + '-' + ((new Date(responseData[i].createTime)).getDate() < 10 ? '0' + (new Date(responseData[i].createTime)).getDate() : (new Date(responseData[i].createTime)).getDate())
            self.dateBooks[i].createTime = responseData[i].createTime.split(' ')[0]
            if (responseData[i].replayList) {
              self.dateBooks[i].replayList = responseData[i].replayList
            } else {
              self.dateBooks[i].replayList = []
            }
          }
          self.isLoading = false
        }
      })
    },
    getLastMonthDate (year, num) {
      var date = new Date()
      var syear = parseInt(year)
      var smonth = date.getMonth()
      var sday = date.getDate()
      var lastDate = new Date(syear, smonth + num, sday)
      var lmonth = (lastDate.getMonth() + 1)
      var lday = lastDate.getDate()
      if (lmonth < 10) {
        lmonth = '0' + lmonth
      }
      if (lday < 10) {
        lday = '0' + lday
      }
      return lastDate.getFullYear() + '-' + lmonth + '-' + lday
    },
    getMainProblems (index, id) {
      this.isLoading = true
      this.mainProblemsId = id
      this.possibleIndex = index
      var self = this
      var userId = localStorage.getItem('userId')
      var beforeDate = this.beforeDate
      var afterDate = this.afterDate
      // console.log(beforeDate + 'aa')
      // console.log(afterDate + 'aa')
      this.dateBookApi.selectDateBook(userId, beforeDate, afterDate, id).then((response) => {
        // console.log(response.data)
        if (response.data.body.code === 0) {
          var responseData = response.data.body.data.bigEvent
          self.dateBooks = responseData
          for (var i = 0; i < self.dateBooks.length; i++) {
            self.dateBooks[i].imgLists = responseData[i].img.split(',')
            // self.dateBooks[i].createTime = (new Date(responseData[i].createTime)).getFullYear() + '-' + (((new Date(responseData[i].createTime)).getMonth() + 1) < 10 ? '0' + ((new Date(responseData[i].createTime)).getMonth() + 1) : ((new Date(responseData[i].createTime)).getMonth() + 1)) + '-' + ((new Date(responseData[i].createTime)).getDate() < 10 ? '0' + (new Date(responseData[i].createTime)).getDate() : (new Date(responseData[i].createTime)).getDate())
            self.dateBooks[i].createTime = responseData[i].createTime.split(' ')[0]
            if (responseData[i].replayList) {
              self.dateBooks[i].replayList = responseData[i].replayList
            } else {
              self.dateBooks[i].replayList = []
            }
          }
          self.isLoading = false
        }
      })
    },
    deleteDateBook (id) {
      // console.log(id)
      var self = this
      self.dateBookApi.deleteDateBook(id).then((response) => {
        // console.log(response.data)
        if (response.data.body.code === 0) {
          self.$vux.toast.show({
            text: '删除成功',
            type: 'text',
            width: '140px'
          })
          var i = self.getArrIndex(self.dateBooks, id)
          self.dateBooks.splice(i, 1)
        }
      }, (response) => {
        // console.log(response.data)
      })
    },
    goChild (id) {
      this.$router.push({path: '/addDateBook', query: {id: id}})
    },
    getArrIndex (arr, id) {
      var indexNum
      arr.forEach(function (item, index, arr) {
        if (item.id === id) {
          indexNum = index
        }
      })
      return indexNum
    },
    getYearsData () {
      var index = this.activeIndex
      var month = index + 1
      // console.log(index)
      // console.log(month)
      // console.log(this.year)
      this.getMonthList(index, month)
    }
  }
}
</script>

<style scoped lang="less">
  .date-book-index{
    .header{
      text-align: center;
      position: relative;
      height: 40px;
      line-height: 40px;
      background: #2181d2;
      color:#fff;
      font-size: 17px;
    }
    .icon-back{
      width: 40px;
      height: 40px;
      background: url('./images/icon-1.png') no-repeat 0 0;
      display: inline-block;
      background-size: cover;
      position: absolute;
      left: 0;
      top: 0;
    }
    .tab-menu{
      background: #fff;
      padding: 15px;
      height: 38px;
      line-height: 38px;
      margin-bottom: 10px;
      position: relative;
    }
    .list-menu{
      overflow: hidden;
      width: 212px;
      margin: 0 auto;
      border: 1px solid #3089d5;
      border-radius: 10px;
    }
    .list-menu li{
      float: left;
      display:inline-block;
      width: 70px;
      height: 100%;
      text-align: center;
      font-size: 16px;
      color: #2181d2;
      border-left: 1px solid #3089d5;
    }
    .list-menu li:first-child{
      border-left: none;
    }
    .list-menu li.active{
      background: #2181d2;
      color:#fff;
    }
    .time-select{
      height: 44px;
      padding: 6px 0;
      line-height: 20px;
      background: #fff;
    }
    .time-years{
      width: 100px;
    }
    .time-months{
      height: 40px;
      line-height: 40px;
      position: relative;
      width: 730px;
    }
    .list-month{
      width: 100%;
    }
    .list-month li{
      display:inline-block;
      text-align: center;
      margin-right: 3px;
    }
    .list-month li.active span{
      background: #fff899;
      color: #2683d1;
    }
    .list-month li span{
      display: inline-block;
      width: 50px;
      height: 26px;
      background: #fffde5;
      color: #a5a5a2;
      line-height: 26px;
      border-radius: 8px;
    }
    .date-section-head{
      padding: 15px 10px;
      background: #fff;
      height: 15px;
      line-height: 15px;
      margin-top: 10px;
      position: relative;
    }
    .date-section-head h3{
      font-weight: normal;
      border-left: 2px solid #2181d2;
      font-size: 15px;
      text-indent: 6px;
    }
    .icon-2{
      width: 40px;
      height: 40px;
      background: url('./images/icon-3.png') no-repeat 0 0;
      display: inline-block;
      background-size: cover;
      position:absolute;
      right: 6px;
      top:2px;
    }
    .date-section-body{
      padding: 0px 10px 15px;
      background: #fff;
      font-size: 14px;
      color:#999;
    }
    .list-option li{
      display:inline-block;
      margin-bottom: 10px;
      margin-right: 5px;
    }
    .list-option li span{
      min-width: 50px;
      height: 35px;
      line-height: 35px;
      display: inline-block;
      background: #edf4fa;
      text-align: center;
      padding: 0 5px;
      border-radius: 9px;
    }
    .list-option li.active span{
      background: #2181d2;
      color: #fff;
    }
    .img-wrap{
      width: 600px;
      padding: 8px 10px 0;
    }
    .list-img{
      width: 600px;
    }
    .list-img li{
      display:inline-block;
      margin-right: 5px;
    }
    .bt-1{
      border-bottom: 2px solid #f8f8f8;
    }
    .date-section-body h4{
      font-size: 15px;
      color: #2181d2;
      height: 44px;
      line-height: 44px;
      border-top: 1px solid #f8f8f8;
      border-bottom: 2px solid #f8f8f8;
      padding: 0 10px;
      margin-top: 12px;
      font-weight: normal;
    }
    .fix-padding{
      padding: 0px 0px 15px;
    }
    .date-section-body h4 em{
      color: #999;
      font-size: 12px;
    }
    .date-con{
      overflow: hidden;
      font-size: 15px;
      color: #000;
      padding: 15px 10px;
    }
    .date-con span{
      display: inline-block;
      width: 70px;
      overflow: hidden;
      // text-overflow: ellipsis;
    }
    .date-detail{
      color: #333;
      margin-left: 75px;
    }
    .date-detail em{
      color: #2f86d3;
      margin-right:15px;
      font-size: 12px;
    }
    .date-detail em.tag{
      height: 20px;
      line-height: 20px;
      display:inline-block;
      background: #f7f7f7;
      color: #a0a0a0;
      text-align: center;
      padding: 0 8px;
      border-radius: 10px;
    }
    .icon-comment{
      width: 30px;
      height: 30px;
      background: url('./images/icon-4.png') no-repeat 0 0;
      background-size: cover;
      display:inline-block;
      margin-top: -3px;
    }
    .date-comment{
      background: #ededed;
      padding: 12px 15px;
      line-height: 22px;
      font-size: 13px;
      color: #333;
      margin: 0 15px;
    }
    .answer{
      text-indent: 2em;
    }
    .list-comment li{
      position: relative;
    }
    .list-comment li span{
      color: #2181d2
    }
    .icon-del{
      width: 16px;
      height: 16px;
      background: url('./images/icon-5.png') no-repeat 0 0;
      display: inline-block;
      background-size: cover;
      position: absolute;
      right: 0px;
      bottom: 2px;
    }
    .icon-filter{
      width: 40px;
      height: 40px;
      background: url('./images/icon-2.png') no-repeat 0 0;
      display: inline-block;
      background-size: cover;
      position: absolute;
      right: 5px;
      top: 15px;
    }
    .input-texa{
      width: 100%;
      height: 50px;
      border:4px solid #ddd;
      padding: 2px 5px;
      box-sizing: border-box;
    }
    .comment-texa{
      padding: 0 15px 10px;
    }
    .text-right{
      text-align: right;
    }
    .post-comment{
      position: relative;
      width: 55px;
      height: 28px;
      line-height: 28px;
      font-size: 14px;
      border-radius: 2px;
      vertical-align: middle;
      color: #fff;
      border: 1px solid #1ca5fc;
      background-color: #1ca5fc;
    }
  }
</style>