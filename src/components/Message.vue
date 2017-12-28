<template>
  <div class="timeline-demo">
    <!-- <msg title="123" description="456" :buttons="buttons" :icon="icon"></msg> -->
    <!-- <panel :header="header" :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>
    <picker :data='years' v-model="year1" @on-change='change'></picker>
    <popover placement="top" style="margin: 20px;" @on-show="onShow" @on-hide="onHide">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <button class="btn btn-default">Popover on top</button>
    </popover> -->
    <!-- <popup-header :left-text="cancel" :right-text="done" :title="title"></popup-header>
    <popup-picker :title="title1" :data="list1" v-model="value1"  placeholder="请选择"></popup-picker> -->
    <!-- <group>
      <popup-radio title="options" :options="options1" v-model="option1"></popup-radio>
    </group> -->
    <!-- <div v-transfer-dom>
      <popup v-model="show1" height="20%">
        <div class="popup1">
          <group>
            <x-switch title="Another XSwitcher" v-model="show1"></x-switch>
          </group>
        </div>
      </popup>
    </div> -->
    <!-- <img class="previewer-demo-img" v-for="(item, index) in list" :src="item.src" width="100" @click="show(index)" :key="index">
    <div v-transfer-dom>
      <previewer :list="list" ref="previewer" :options="options"></previewer>
    </div>
    <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>
    <div>
       <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
    </div>
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="">
        <span slot="label">Message</span>
      </tabbar-item>
    </tabbar> -->
    <!-- <timeline>
			<timeline-item>
				<h4 class="recent">【广东】 广州市 已发出</h4>
				<p class="recent">2016-04-17 12:00:00</p>
			</timeline-item>
			<timeline-item>
				<h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
				<p>2016-04-16 10:23:00</p>
			</timeline-item>
			<timeline-item>
				<h4> 商家正在通知快递公司揽件</h4>
				<p>2016-04-15 9:00:00</p>
			</timeline-item>
		</timeline>
		<timeline>
			<timeline-item v-for="(i, index) in count" :key="index">
				<h4 :class="[i === 0 ? 'recent' : '']">Timeline Node {{i + 1}}</h4>
				<p :class="[i === 0 ? 'recent' : '']">index {{i + 1}}</p>
			</timeline-item>
		</timeline>
    <x-button type="primary" @click.native="count = 6"> Set to 6 nodes</x-button>
    <x-button type="primary" @click.native="count = 3"> Set to 3 nodes</x-button> -->

    <!-- <toast v-model="show1">基本使用</toast>
    <div style="height:100%;">
      <view-box ref="viewBox">
        <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
        <router-view></router-view>
        <tabbar slot="bottom"></tabbar>
      </view-box>
    </div> -->
    <!-- <x-button type="primary" show-loading>submit</x-button> -->
    <!-- <x-circle :percent="percent1" :stroke-width="10" stroke-color="#04BE02">
      <span>{{ percent1 }}</span>
    </x-circle> -->
    <!-- <div v-transfer-dom>
      <x-dialog v-model="showToast" class="dialog-demo">
        <div style="padding:15px;">
          <x-button @click.native="doShowToast" type="primary">show toast</x-button>
        </div> 
        <div @click="showToast=false">
          <span class="vue-close"></span>
        </div>   
      </x-dialog>
    </div>   -->
    <!-- <x-header>This is the page title.</x-header>
    <x-icon type="ios-ionic-outline" size="30"></x-icon>
    <x-icon type="ios-arrow-back" size="30"></x-icon>
    <x-icon type="ios-arrow-forward" size="30"></x-icon>
    <x-icon type="ios-arrow-up" size="30"></x-icon>
    <x-icon type="ios-arrow-right" size="30"></x-icon>
    <x-icon type="ios-arrow-down" size="30"></x-icon>
    <x-icon type="ios-arrow-left" size="30"></x-icon>
    <x-icon type="ios-arrow-thin-up" size="30"></x-icon>
    <x-icon type="ios-arrow-thin-right" size="30"></x-icon>
    <x-icon type="ios-arrow-thin-down" size="30"></x-icon>
    <x-icon type="ios-arrow-thin-left" size="30"></x-icon>
    <x-icon type="ios-circle-filled" size="30"></x-icon>
    <x-icon type="ios-circle-outline" size="30"></x-icon>
    <x-icon type="ios-checkmark-empty" size="30"></x-icon>
    <x-icon type="ios-checkmark-outline" size="30"></x-icon> -->
    <!-- <div v-for="(src,index) in list5" style="background-color:yellow;text-align:center;" :key="index">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" ></x-img>
    </div> -->
    <group>
      <x-input title="title" v-model="value"></x-input>
      <x-number title="title" v-model="value"></x-number>
      <x-progress :percent="percent1" :show-cancel="false"></x-progress>
      <x-switch title="title" v-model="bool"></x-switch>
      <x-textarea title="title" v-model="value3"></x-textarea>
  </group>
  <div style="padding:0 15px;">
      <x-table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
          </tr>
        </tbody>
      </x-table>
    </div>
  </div>
</template>
<script>
import { Msg, Divider, XButton, Panel, Picker, Popover, PopupHeader, PopupPicker, PopupRadio, Popup, Previewer, TransferDom, Swiper, Tab, TabItem, SwiperItem, Tabbar, TabbarItem, Timeline, TimelineItem, Toast, ViewBox, XHeader, XCircle, XDialog, XImg, XInput, Group, XNumber, XProgress, XSwitch, XTable, XTextarea } from 'vux'
let years = []
const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg',
  title: '送你一次旅行',
  fallbackImg: 'https://static.vux.li/demo/3.jpg'
}]
const list = () => ['精选', '美食', '电影', '酒店', '外卖']
for (var i = 2000; i <= 2030; i++) {
  years.push({
    name: i + '年',
    value: i + ''
  })
}
export default {
  name: 'Message',
  directives: {
    TransferDom
  },
  components: {
    Msg,
    Divider,
    XButton,
    Panel,
    Picker,
    Popover,
    PopupHeader,
    PopupPicker,
    PopupRadio,
    Popup,
    Previewer,
    Swiper,
    Tab,
    TabItem,
    SwiperItem,
    Tabbar,
    TabbarItem,
    Timeline,
    TimelineItem,
    Toast,
    ViewBox,
    XHeader,
    XCircle,
    XDialog,
    XImg,
    XInput,
    Group,
    XNumber,
    XProgress,
    XSwitch,
    XTable,
    XTextarea
  },
  methods: {
    changeIcon () {
      if (!this.icon || this.icon === 'success') {
        this.icon = 'warn'
        return
      }
      if (this.icon === 'warn') {
        this.icon = 'info'
        return
      }
      if (this.icon === 'info') {
        this.icon = 'waiting'
        return
      }
      if (this.icon === 'waiting') {
        this.icon = 'success'
      }
    },
    onImgError (item, $event) {
      console.log(item, $event)
    },
    demo01_onIndexChange (index) {
      this.demo01_index = index
    },
    doShowToast () {
      this.$vux.toast.show({
        text: 'toast'
      })
    }
  },
  data () {
    return {
      list5: [
        'https://o5omsejde.qnssl.com/demo/test1.jpg',
        'https://o5omsejde.qnssl.com/demo/test2.jpg',
        'https://o5omsejde.qnssl.com/demo/test0.jpg',
        'https://o5omsejde.qnssl.com/demo/test4.jpg',
        'https://o5omsejde.qnssl.com/demo/test5.jpg',
        'https://o5omsejde.qnssl.com/demo/test6.jpg',
        'https://o5omsejde.qnssl.com/demo/test7.jpg',
        'https://o5omsejde.qnssl.com/demo/test8.jpg'
      ],
      showToast: true,
      bool: false,
      percent1: 10,
      count: 3,
      index: 0,
      index01: 0,
      list2: list(),
      demo2: '美食',
      demo01_index: 0,
      demo01_list: baseList,
      type: '1',
      description: 'msg description',
      icon: '',
      buttons: [{
        type: 'primary',
        text: 'Primary button'
      }, {
        type: 'default',
        text: 'Secondary button',
        link: '/demo'
      }],
      list3: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      footer: {
        title: 'more',
        url: 'http://vux.li'
      },
      header: '头部',
      years: [years],
      year1: [''],
      cancel: '取消',
      done: '确认',
      title: '标题',
      title1: '手机机型',
      list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
      value1: ['iPhone'],
      option1: 'A',
      options1: ['A', 'B', 'C'],
      show1: true,
      value: 123,
      value3: '12',
      list: [{
        src: 'https://ooo.0o0.ooo/2017/05/17/591c271ab71b1.jpg',
        w: 800,
        h: 400
      },
      {
        src: 'https://ooo.0o0.ooo/2017/05/17/591c271acea7c.jpg'
      }, {
        src: 'https://ooo.0o0.ooo/2017/06/15/59425a592b949.jpeg'
      }],
      options: {
        getThumbBoundsFn (index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /* display: inline-block; */
  margin: 0 10px;
}

a {
  color: #42b983;
}
.timeline-demo {
	p {
		color: #888;
		font-size: 0.8rem;
	}
	h4 {
		color: #666;
		font-weight: normal;
	}
	.recent {
		color: rgb(4, 190, 2)
	}
}
</style>
