<template>
  <div class="home-index">
    <!-- <div class="header">
      <i class="icon-back"></i>
      <span>经营复盘小助手</span>
    </div> -->
    <div class="tab-menu">
      <ul :index="activeIndex" class="list-menu">
        <li v-for="(menu,index) in menus" :class="{active:activeIndex==index}" :key="index" @click="activeMenu(index)">{{menu}}</li>
      </ul>
      <!-- <i class="icon-filter" @click="goFilter"></i> -->
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Group, Cell, Tab, TabItem, Swiper, SwiperItem, XButton, XHeader, Datetime, Scroller } from 'vux'
import { mapState } from 'vuex'
import LoadingPublic from '../Public/LoadingPublic'
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
    Scroller
  },
  data () {
    return {
      activeIndex: 0,
      year: '2018',
      menus: ['数据', '小结', '大事记']
    }
  },
  computed: {
    ...mapState({
      baseUrl: state => state.common.baseUrl
    })
  },
  created () {
    window.initData = function (token, userId, url) {
      localStorage.setItem('accessToken', token)
      localStorage.setItem('userId', userId)
      localStorage.setItem('baseUrl', url)
      // alert(url + '123')
    }
    switch (this.$router.history.current.name) {
      case 'DateBook':
        this.activeIndex = 2
        break
      case 'Summary':
        this.activeIndex = 1
        break
      default:
        this.activeIndex = 0
    }
  },
  mounted () {
  },
  methods: {
    activeMenu: function (index) {
      this.activeIndex = index
      if (index === 0) {
        this.$router.push('/dataShow')
      }
      if (index === 1) {
        this.$router.push('/summary')
      }
      if (index === 2) {
        this.$router.push('/dateBook')
      }
    },
    goFilter () {
      this.$router.push('/selector')
    }
  }
}
</script>

<style scoped lang="less">
  .home-index{
    position: relative;
    .header{
      text-align: center;
      position: relative;
      height: 40px;
      line-height: 40px;
      background: #2181d2;
      color:#fff;
      font-size: 17px;
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
      width: 600px;
    }
    .list-month{
      width: 100%;
    }
    .list-month li{
      display:inline-block;
      text-align: center;
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
  }
 
  .fade-enter{
    opacity: 0;
  }
   .fade-enter-active{
    transition: all 0.3s ease;
  }
  .fade-leave-to{
    opacity: 0;
  }
  .fade-leave-active{
    transition: all 0.3s ease;
  }
</style>
