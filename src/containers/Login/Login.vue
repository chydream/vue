<template>
  <div class="log-wrap" :style="{ height: height + 'px' }">
    <loading-public></loading-public>
	<div class="logo text-center"><img src="./images/logo.png"></div>
    <form id="logForm" class="log-form">
      <div class="log-input">
        <i class="sicon-user"></i><input type="text" class="input-item" placeholder="请输入用户名" v-model="userName">
      </div>
      <div class="log-input">
        <i class="sicon-key"></i><input type="password" class="input-item" placeholder="请输入密码" v-model="userPwd">
      </div>
      <p class="text-right forgot"><a href="javascript:void(0)" id="forgotPassword">忘记密码？</a></p>
      <p class="text-center"><a href="javascript:void(0)" class="log-sub" id="logSub" @click="login">登录</a></p>
    </form>
  </div>
</template>

<script>
import { Group, Cell, Tab, TabItem, Swiper, SwiperItem, XButton, XHeader } from 'vux'
import { mapState } from 'vuex'
import LoadingPublic from '../Public/LoadingPublic'
import md5 from 'blueimp-md5'
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
    XHeader
  },
  data () {
    return {
      userName: '',
      userPwd: '',
      height: this.getScrollHeight()
    }
  },
  computed: {
    ...mapState({
      baseUrl: state => state.common.baseUrl
    })
  },
  created () {
    this.goIndex()
  },
  mounted () {
  },
  methods: {
    getScrollTop () {
      var scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    },
    getClientHeight () {
      var clientHeight = 0
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
      } else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
      }
      return clientHeight
    },
    getScrollHeight () {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    },
    login () {
      var self = this
      var userName = self.userName
      var userPwd = self.userPwd
      if (userName === '') {
        self.$vux.toast.show({
          text: '用户名不能为空',
          type: 'text',
          width: '140px'
        })
        return
      }
      if (userPwd === '') {
        self.$vux.toast.show({
          text: '密码不能为空',
          type: 'text',
          width: '140px'
        })
        return
      }
      self.loginApi.getLogin(userName, md5(userPwd), 1).then((response) => {
        var data = response.data.body.data
        if (response.data.body.code === 0) {
          localStorage.setItem('userName', data.userName)
          localStorage.setItem('accessToken', data.accessToken)
          var accessToken = data.accessToken
          self.loginApi.getUserId(accessToken).then((response) => {
            var newData = response.data.body.data
            if (response.data.body.code === 0) {
              localStorage.setItem('userId', newData.id)
              self.goIndex()
            }
          })
        } else {
          self.$vux.toast.show({
            text: '用户名或者密码错误',
            type: 'text',
            width: '140px'
          })
        }
      }, (res) => {
        self.$vux.toast.show({
          text: '接口地址错误',
          type: 'text',
          width: '140px'
        })
      })
    },
    goIndex () {
      var accessToken = localStorage.getItem('accessToken')
      // console.log(accessToken)
      if (accessToken !== null) {
        this.$router.push('/dataShow')
      }
    }
  }
}
</script>

<style scoped lang="less">
/* login */
.text-center {
    text-align: center;
}
.text-right {
    text-align: right;
}
.log-wrap{
	background: url(./images/log-bg.png);
	width: 100%;
	height: 100%;
	background-size:cover;	
}
.logo img{
	width: 79.81px;	
	height: 79.81px;
	margin-top: 105.8px;
	margin-bottom: 124.2px;
}
.sicon-user{
	width: 26.909999999999997px;
	height: 26.909999999999997px;
	background: url(./images/user.png) no-repeat 0 0;
	background-size: cover;
	display: inline-block;
	position: absolute;
	left: 9.89px;
	top: 6px;
}
.sicon-key {
  width: 26.909999999999997px;
	height: 26.909999999999997px;
  background: url(./images/password.png) no-repeat 0 0;
  background-size: cover;
  display: inline-block;
  position: absolute;
  left: 9.89px;
	top: 6px;
}
.header-title{
	color: #fff;
	margin-bottom: 79.81px;
	margin-top:15px;
	font-size: 17.94px;
}

.log-input{
	background: transparent;
	border-bottom: 1px solid #fff;
	padding: 4.6000000000000005px;
	width: 249.77999999999997px;
	margin: 0 auto;
	height: 34.96px;
	line-height: 34.96px;
	position: relative;
	margin-bottom: 18.400000000000002px;
}
.input-item{
	background-color: transparent!important;
	width: 100%;
  height: 100%!important;
  border: none!important;
  padding: 2px!important;
  text-indent: 39.1px;
	font-size: 12.88px;
	color: #e4fcee;
	box-sizing: border-box;
}
.log-form{
	width: 249.77999999999997px;
	margin: 0 auto;
}
.log-form p a{
	color: #dedede;
	font-size: 11.96px;
	letter-spacing: 1px;
}
.log-form p.forgot{
	margin-top: -6.8999999999999995px;
}
.log-sub{
	width: 192.97000000000003px;
	height: 39.79px;
	line-height: 39.79px;
	display: inline-block;
	text-align: center;
	border: 1px solid #fff;
	border-radius: 39.79px;
	font-size: 17.94px!important;
	margin-top: 29.900000000000002px;
}
.fix-input{
  padding-right:0px; 
  width: 92px;
}
.validate,.validate:active,.validate:focus{
	background: transparent!important;
	color: #fff!important;
	font-size:13.799999999999999px;
	height: 34.96px !important;
	width: 87.39999999999999px;
	position: absolute;
	right: 0px;
	top: -1.1500000000000001px;
	border:none;
}
</style>
