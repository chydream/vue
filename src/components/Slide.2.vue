<template>
  <div class="slide">
    <div class="slide-box">
      <div class="slide-content">
        <!-- <ul class="list-img"> -->
        <transition-group tag="ul" name="image">
          <li v-for="(img,index) in imgs" :key="index"  v-show="index===mark"><img :src="img"></li>
        </transition-group>
        <!-- </ul> -->
      </div>
      <ul class="list-dot">
        <li v-for="(dot,index) in dots" :key="index" :class="{active:index===mark}" @click="goNext(index)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgs: [
        require('../assets/1.jpg'), require('../assets/2.jpg'), require('../assets/3.jpg')
      ],
      dots: [1, 2, 3],
      current: 0,
      mark: 0
    }
  },
  methods: {
    goNext (index) {
      console.log(index)
      this.mark = index
    },
    autoPlay () {
      this.mark++
      if (this.mark === 3) {
        this.mark = 0
      }
    },
    play () {
      setInterval(this.autoPlay, 1000)
    }
  },
  created () {
    this.play()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0px;
  margin: 0px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.slide-content ul li{
  width: 100%;
  height: 100%;
  position: absolute;
}
.slide-content ul li.active{
  display: block;
}
.slide-content ul li img{
  max-width: 100%;
  max-height: 100%;
}
.slide-box{
  width: 354px;
  height: 236px;
  position: relative;
  overflow: hidden;
}
.slide-content{
  position: relative;
  /* left: 0;
  top: 0%; */
  width: 100%;
  height: 236px;
}
.slide-content ul{
  width: 100%;
  height: 236px;
}
.list-dot{
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 10;
}
.list-dot li{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  margin: 0 2px;
  cursor: pointer;
}
.list-dot li.active{
  background: red;
}
.image-enter-active {  
  transform: translateX(0);  
  transition: all 1.5s ease;  
}  
.image-leave-active {  
  transform: translateX(-100%);  
  transition: all 1.5s ease;  
}  
.image-enter {  
  transform: translateX(100%);  
}  
.image-leave {  
  transform: translateX(0);  
}  
</style>
