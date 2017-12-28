<template>
  <div>
    <!-- <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
    <group>
    	<x-address title="title" v-model="value" :list="addressData"></x-address>
    	<cell title="上面value值" :value="value"></cell>
    </group> -->
    <!-- <form-preview header-label="付款金额" header-value="¥2400.00" :body-items="list" :footer-buttons="buttons1"></form-preview> -->
    <!-- <grid>
      <grid-item label="Grid" v-for="i in 7" :key='i'>
        1
      </grid-item>
    </grid>
    <group>
      <group-title slot="title">i am a title <span style="float:right;">right</span></group-title>
      <cell title="cell"></cell>
    </group>
    <icon type="success"></icon>
    <icon type="info"></icon>
    <icon type="info-circle"></icon>
    <icon type="warn"></icon>
    <icon type="waiting"></icon>
    <icon type="waiting-circle"></icon>
    <icon type="safe-success"></icon>
    <icon type="safe-warn"></icon>
    <icon type="success-circle"></icon>
    <icon type="success-no-circle"></icon>
    <icon type="circle"></icon>
    <icon type="download"></icon>
    <icon type="cancel"></icon>
    <icon type="search"></icon>
    <icon type="clear"></icon>
    <icon type="success" is-msg></icon>
    <icon type="info" is-msg></icon>
    <icon type="safe-success" is-msg></icon>
    <icon type="safe-warn" is-msg></icon> -->
    <!-- <inline-calendar ref="calendar" class="inline-calendar-demo" v-model="values" start-date="2016-04-01" end-date="2018-05-30"></inline-calendar>
    <inline-loading></inline-loading>
    <div style="text-align:center;">
      <inline-x-number width="50px"></inline-x-number>
      <load-more :show-loading="true" background-color="#fbf9fe"></load-more>
    </div> -->
    <!-- <divider>{{ loadMore }}</divider>
    <marquee direction="up">
      <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="align-middle">hello World {{ i }}</marquee-item>
    </marquee> -->
    <!-- <div style="margin:10px;overflow:hidden;" v-for="(item,index) in lists" :key="index">
      <masker style="border-radius:2px;">
        <div class="m-img" :style="{background: 'url('+item.img+')'}"></div>
        <div slot="content" class="m-title">
          {{ item.title }}<br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker> 
    </div> -->
    <msg :title="title" :description="description" :buttons="buttons" :icon="icon"></msg>
  </div>
</template>

<i18n>
Yeah! You make it:
  zh-CN: 操作成功
Msg description:
  zh-CN: 内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现<a href="javascript:void(0);">文字链接</a>
Primary button:
  zh-CN: 推荐操作
Secondary button:
  zh-CN: 辅助操作
</i18n>

<script>
import { Group, Cell, XAddress, ChinaAddressV4Data, FormPreview, Grid, GridItem, Icon, InlineCalendar, InlineLoading, InlineXNumber, LoadMore, Marquee, MarqueeItem, Divider, Masker, Msg, XButton } from 'vux'
import axios from 'axios'

export default {
  components: {
    Group,
    Cell,
    XAddress,
    ChinaAddressV4Data,
    FormPreview,
    Grid,
    GridItem,
    Icon,
    InlineCalendar,
    InlineLoading,
    InlineXNumber,
    LoadMore,
    Marquee,
    MarqueeItem,
    Divider,
    Masker,
    Msg,
    XButton
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg1: 'Hello World!',
      value: '',
      direction: 'down',
      addressData: ChinaAddressV4Data,
      values: '',
      loadMore: '更多',
      list: [{
        label: '商品',
        value: '电动打蛋机'
      }, {
        label: '标题标题',
        value: '名字名字名字'
      }, {
        label: '标题标题',
        value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
      }],
      buttons1: [{
        style: 'default',
        text: '辅助操作'
      }, {
        style: 'primary',
        text: '跳转到首页',
        link: '/'
      }],
      lists: [{
        title: '洗颜新潮流！人气洁面皂排行榜',
        img: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'
      }, {
        title: '美容用品 & 日用品（上）',
        img: 'https://cdn.xiaotaojiang.com/uploads/59/b22e0e62363a4a652f28630b3233b9/_.jpg'
      }, {
        title: '远离车内毒气，日本车载空气净化器精选',
        img: 'https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg'
      }],
      icon: 'success',
      buttons: [
        {
          type: 'primary',
          text: 'Primary button'
        },
        {
          type: 'default',
          text: 'Secondary button',
          link: '/demo'
        }
      ],
      title: 'yes',
      description: 'no'
    }
  },
  created () {
    axios.get('/api/posts').then(function (response) {
      // console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
    this.$http.get('/api/posts')
    .then((response) => {
      // console.log(response)
    })
  },
  methods: {
    onClick (i) {
      console.log(i)
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}
.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}
.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>
