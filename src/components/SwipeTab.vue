<template>
  <div>
      <div style="overflow:hidden" id="touchItem">
        <tab :line-width="2" active-color='#fc378c' v-model="index">
          <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click.native="clickItem(index,this)" :key="index" :activeIndex="index">{{item}}</tab-item>
        </tab>
      </div>
      <swiper v-model="index" height="100px" :show-dots="false" @on-index-change="onIndexChange">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
    </div>
</template>
<script>
import {Tab, TabItem, Divider, XButton, Swiper, SwiperItem} from 'vux'
export default {
  components: {
    Tab,
    TabItem,
    Divider,
    XButton,
    Swiper,
    SwiperItem
  },
  name: 'hello',
  data () {
    return {
      demo2: '精选',
      index: 0,
      list2: ['精选', '美食', '电影', '酒店', '外卖', '外卖111', '外卖222']
    }
  },
  mounted () {
    // this.setTabWidth()
    // this.clickFirstItem()
    var len = this.list2.length
    document.querySelector('.vux-tab').style.width = 72 * len + 'px'
    // var middle = document.body.clientWidth / 2
    var touchItem = document.getElementById('touchItem')
    touchItem.addEventListener('touchstart', touch, false)
    touchItem.addEventListener('touchmove', touch, false)
    touchItem.addEventListener('touchend', touch, false)
    var touchStartX, touchStartY, touchEndX, touchEndY, timeStart, touchShiftX, touchShiftY
    // var scrollMax = 72 * (len - 5)
    function touch (event) {
      event = event || window.event
      var touch = event.targetTouches[0]
      switch (event.type) {
        case 'touchstart':
          touchStartX = touch.pageX
          touchStartY = touch.pageY
          timeStart = new Date()
          break
        case 'touchmove':
          touchEndX = touch.pageX
          touchEndY = touch.pageY
          touchShiftX = touchEndX - touchStartX
          touchShiftY = touchEndY - touchStartY
          if (touchShiftX < 0) {
            touchItem.scrollLeft += Math.abs(touchShiftX)
          } else {
            touchItem.scrollLeft -= touchShiftX
          }
          if (touchShiftY > 0) {
          }
          break
        case 'touchend':
          var timeEnd = new Date()
          var timeLast = timeEnd - timeStart
          var n = 0
          if (len - 5 > 5) {
            n = 5
          } else {
            n = len - 5
          }
          if (timeLast > 150) {
            if (touchShiftX < 0) {
              var lastLen = parseInt(document.getElementsByClassName('vux-tab-item')[len - 1].getAttribute('activeindex'))
              if (lastLen > 4) {
                for (var i = 0; i < len; i++) {
                  var rightActive = parseInt(document.getElementsByClassName('vux-tab-item')[i].getAttribute('activeindex'))
                  document.getElementsByClassName('vux-tab-item')[i].setAttribute('activeindex', rightActive - n)
                }
              }
            } else {
              var firstLen = parseInt(document.getElementsByClassName('vux-tab-item')[0].getAttribute('activeindex'))
              if (firstLen < 0) {
                for (var j = 0; j < len; j++) {
                  var leftActive = parseInt(document.getElementsByClassName('vux-tab-item')[j].getAttribute('activeindex'))
                  document.getElementsByClassName('vux-tab-item')[j].setAttribute('activeindex', leftActive + n)
                }
              }
            }
          }
          break
      }
    }
  },
  created () {
  },
  methods: {
    clickItem (index) {
      this.demo2 = this.list2[index]
      var touchItem = document.getElementById('touchItem')
      var len = this.list2.length
      var iLen = len - 5 > 0 ? len - 5 : 0
      var activeindex = parseInt(document.getElementsByClassName('vux-tab-item')[index].getAttribute('activeindex'))
      var lastLen = parseInt(document.getElementsByClassName('vux-tab-item')[len - 1].getAttribute('activeindex'))
      var firstLen = parseInt(document.getElementsByClassName('vux-tab-item')[0].getAttribute('activeindex'))
      var rightLen = (len - iLen - 1)
      var leftLen = 0
      if (activeindex === rightLen) {
        if (activeindex < lastLen) {
          touchItem.scrollLeft += 72
          for (var i = 0; i < len; i++) {
            var rightActive = parseInt(document.getElementsByClassName('vux-tab-item')[i].getAttribute('activeindex'))
            document.getElementsByClassName('vux-tab-item')[i].setAttribute('activeindex', rightActive - 1)
          }
        }
      }
      if (activeindex === leftLen) {
        if (activeindex > firstLen) {
          touchItem.scrollLeft -= 72
          for (var j = 0; j < len; j++) {
            var leftActive = parseInt(document.getElementsByClassName('vux-tab-item')[j].getAttribute('activeindex'))
            document.getElementsByClassName('vux-tab-item')[j].setAttribute('activeindex', leftActive + 1)
          }
        }
      }
    },
    onIndexChange (index) {
      this.clickItem(index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
