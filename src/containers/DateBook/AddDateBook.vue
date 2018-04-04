<template>
  <div class="add-date-book">
    <!-- <div class="header">
      <i class="icon-back"></i>
      <span>经营复盘小助手</span>
    </div> -->
    <div class="add-list">
      <div class="list-left">
        <scroller lock-y :scrollbar-x=false>
          <div class="img-wrap">
            <!-- 请上传图片 -->
            <ul class="list-img">
              <li v-for="(img,index) in imgList" :key="index"><img :src="rootUrl+img"></li>
            </ul>
          </div>
        </scroller>
      </div>
      <div class="list-right">
        <samp class="add-img" id="imgWrap">
          <input type="file" name="myFile" accept="image/jpeg,image/png,image/gif" id="myFile" @change="uploadImg()" imageSrc="" multiple ><label for="myFile"></label>
        </samp>
      </div>
    </div>
    <div class="form-wrap">
      <p>
        <span class="fl">类别：</span>
        <select class="input-sel fl" v-model="category" :disabled="isAdd">
          <option v-for="(category,index) in categorys" :key="index">{{category}}</option>
        </select>
      </p>
      <p>
        <span class="fl mt-10">标题：</span>
        <!-- <input type="text" name="title" value="" placeholder="" class="input-txt"> -->
        <group class="group-item">
          <x-input v-model="title" :disabled="isAdd"></x-input>
        </group>
      </p>
       <p>
        <span class="fl mt-10">商品问题：</span>
        <!-- <input type="text" name="title" value="" placeholder="" class="input-txt"> -->
        <group class="group-item">
          <x-input v-model="goodsProblem" :disabled="isAdd"></x-input>
        </group>
      </p>
      <!-- <p>
        <span>商品问题：</span><input type="text" name="title" value="" placeholder="" class="input-txt">
      </p> -->
      <p style="margin-top:12px;">
        <span class="main-ques">主要问题</span>
        <ul class="list-question">
          <li :class="{active:activeIndex == index}" v-for="(question,index) in  goodsMainProblems" :key="index" @click="getQuestion(index, question.value)"><span>{{question.name}}</span></li>
        </ul>
      </p>
      <p><span>具体描述：</span></p>
      <p>
        <group>
          <x-textarea v-model="description" show-counter :max="20" :disabled="isAdd"></x-textarea>
        </group>
      </p>
      <p class="mt-10"><span>解决方案：</span></p>
      <p>
        <group>
          <x-textarea v-model="solvePlan" show-counter :max="20" :disabled="isAdd"></x-textarea>
        </group>
      </p>
    </div>
    <div class="add-btn">
      <ul class="list-btn">
        <li v-show="isAdd"><a href="javascript:void(0)" @click="deleteItem">删除</a></li>
        <li v-show="!isAdd"><a href="javascript:void(0)" @click="submitInfo" >提交</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Group, Cell, Tab, TabItem, Swiper, SwiperItem, XButton, XHeader, Datetime, Scroller, XTextarea, XInput } from 'vux'
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
    XTextarea,
    XInput
  },
  data () {
    return {
      rootUrl: config.API_ROOT,
      activeIndex: 0,
      year: '2018',
      menus: ['数据', '小结', '大数据'],
      title: '',
      goodsProblem: '',
      description: '',
      solvePlan: '',
      imgList: [],
      categorys: ['生鲜处', '食品处', '零售处'],
      goodsMainProblems: [],
      goodsMainProblem: '',
      img: [],
      category: '',
      isAdd: false
    }
  },
  computed: {
    ...mapState({
      baseUrl: state => state.common.baseUrl
    })
  },
  created () {
    var self = this
    var queryId = this.$route.query.id
    // console.log(queryId === undefined)
    self.dateBookApi.selectMainProblem().then((response) => {
      self.goodsMainProblems = response.data.body.data.mainList
      if (queryId === undefined) {
        this.goodsMainProblem = self.goodsMainProblems[self.activeIndex].value
      }
    })
    // console.log(queryId)
    if (queryId !== undefined) {
      this.isAdd = true
      this.dateBookApi.selectByBigEventId(queryId).then((response) => {
        // console.log(response.data)
        if (response.data.body.code === 0) {
          var responseData = response.data.body.data
          this.category = responseData.category
          this.title = responseData.title
          this.goodsProblem = responseData.goodsProblem
          this.goodsMainProblem = responseData.goodsMainProblem
          this.description = responseData.description
          this.solvePlan = responseData.solvePlan
          this.activeIndex = this.getArrIndex(this.goodsMainProblems, responseData.goodsMainProblem)
          this.imgList = responseData.img.split(',')
        }
      })
    }
  },
  mounted () {
  },
  methods: {
    activeCondition: function (index) {
      this.activeIndex = index
    },
    uploadImg () {
      var self = this
      var imgFiles = document.getElementById('myFile').files
      for (var i = 0; i < imgFiles.length; i++) {
        var reader = new FileReader()
        var imgSrc
        reader.onload = function (e) {
          imgSrc = e.target.result
          var base64Data = []
          base64Data.push(imgSrc)
          // console.log(base64Data)
          self.dateBookApi.uploadTempletImg(base64Data).then((response) => {
            var imgUrl = response.data.body.data[0]
            self.imgList.push(imgUrl)
            self.img.push(response.data.body.data[0])
          })
        }
        reader.readAsDataURL(imgFiles[i])
      }
    },
    getQuestion (index, question) {
      this.activeIndex = index
      this.goodsMainProblem = question
    },
    submitInfo () {
      this.createUserId = localStorage.getItem('userId')
      var sqToolFpArr = []
      var sqToolFpBigevent = {}
      sqToolFpBigevent.title = this.title
      sqToolFpBigevent.goodsProblem = this.goodsProblem
      sqToolFpBigevent.goodsMainProblem = this.goodsMainProblem
      sqToolFpBigevent.description = this.description
      sqToolFpBigevent.solvePlan = this.solvePlan
      sqToolFpBigevent.authStatus = 1
      sqToolFpBigevent.createUserId = this.createUserId
      sqToolFpBigevent.pauthStatus = 1
      sqToolFpBigevent.img = this.img.join(',')
      sqToolFpBigevent.note = ''
      sqToolFpBigevent.category = this.category
      sqToolFpArr.push(sqToolFpBigevent)
      this.dateBookApi.addDateBook(sqToolFpArr).then((response) => {
        if (response.data.body.code === 0) {
          this.$vux.toast.show({
            text: '添加成功',
            type: 'text',
            width: '140px'
          })
          this.$router.push('/dateBook')
        }
      })
    },
    getArrIndex (arr, id) {
      var indexNum
      arr.forEach(function (item, index, arr) {
        if (item.value === id) {
          indexNum = index
        }
      })
      return indexNum
    },
    deleteItem () {
      var self = this
      var id = this.$route.query.id
      // this.$router.go(-1)
      self.dateBookApi.deleteDateBook(id).then((response) => {
        // console.log(response.data)
        if (response.data.body.code === 0) {
          self.$vux.toast.show({
            text: '删除成功',
            type: 'text',
            width: '140px'
          })
          this.$router.go(-1)
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .add-date-book{
    background: #fff;
    padding-bottom: 50px;
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
    .img-wrap{
      width: 600px;
      padding: 8px 10px 0;
      height: 60px;
    }
    .list-img{
      width: 600px;
    }
    .list-img li{
      display:inline-block;
    }
    .list-left .list-img li{
       margin-right: 7px;
    }
    .bt-1{
      border-bottom: 2px solid #f8f8f8;
    }
    .add-list{
      position: relative;
    }
    .list-left{
      width: 73%;
      overflow: hidden;
    }
    .list-right{
      position: absolute;
      right: 10px;
      top: 15px;
    }
    .add-list .img-wrap{
      padding: 14px 10px 14px;
    }
    .add-list{
      border-bottom: 1px solid #f8f8f8;
    }
    .form-wrap{
      padding: 15px;
      font-size: 16px;
      color: #666;
    }
    .form-wrap p{
      overflow: hidden;
    }
    .input-sel{
      width: 120px;
      height: 26px;
      line-height: 26px;
      border: 1px solid #cfcfcf;
      color: #333;
      border-radius: 4px;
    }
    .input-txt{
      width: 200px;
      height: 24px;
      line-height: 24px;
      border: 1px solid #cfcfcf;
      color: #333;
    }
    .main-ques{
      float: left;
      display:inline-block;
    }
    .list-question{
      margin-left: 80px;
    }
    .list-question li{
      display: inline-block;
      margin-bottom: 10px;
      margin-right: 5px;
    }
    .list-question li span{
      min-width: 74px;
      height: 34px;
      line-height: 34px;
      background: #edf4fa;
      padding: 0 5px;
      color: #999999;
      display: inline-block;
      text-align: center;
      border-radius: 5px;
      font-size: 14px;
    }
    .list-question li.active span{
      background: #2181d2;
      color: #fff;
    }
    .add-btn{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 45px;
      line-height: 45px;
    }
    .list-btn{
      overflow: hidden;
    }
    .list-btn li{
      width: 100%;
      float: left;
      text-align: center;
    }
    .list-btn li:first-child a{
      background: #fc570f;
    }
    .list-btn li a{
      display: inline-block;
      width: 100%;
      height: 100%;
      background: #2b82ff;
      color: #fff;
      font-size: 17px;
    }
    .mt-10{
      margin-top: 10px;
    }
    .group-item{
      width:200px;
      float:left
    }
    .add-img{
      overflow: hidden;
    }
    .add-img input{
      display: none;
    }
    .add-img label{
      width: 80px;
      height: 60px;
      background: url('./images/add.png') no-repeat 0 0;
      display: inline-block;
      background-size: cover;
    }
    .swidth{
      width: 100%!important;
    }
  }
  @media screen and  (max-width:360px){
    .list-left .list-img li{
       margin-right: 4px!important;
    }
  }
  @media screen and  (max-width:320px){
    .list-left{
      width: 70%!important;
      overflow: hidden;
    }
    .list-left .list-img li{
      margin-right: 2px!important;
    }
  }
</style>