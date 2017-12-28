<template>  
  <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">  
    <div class="slideshow">  
      <ul>
        <transition-group tag="ul" name="image">  
        <li v-for="(img, index) in imgArray" :key="index" v-show="index===mark">  
          <a href="#">  
            <img :src='img'>  
          </a>  
        </li>
        </transition-group>   
      </ul>  
    </div>  
    <div class="bar">  
      <span v-for="(item, index) in imgArray" :key="index" :class="{ 'active':index===mark }" @click="change(index)"></span>  
    </div>  
  </div>  
</template>  

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgArray: [
        require('../assets/1.jpg'), require('../assets/2.jpg'), require('../assets/3.jpg')
      ],
      dots: [1, 2, 3],
      current: 0,
      mark: 0,
      timer: null
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
      setInterval(this.autoPlay, 5000)
    },
    change (i) {
      this.mark = i
    },
    stop () {
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, 2500)
    }
  },
  created () {
    this.play()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {  
    margin: 0;  
    padding: 0;  
    list-style: none;  
  }  
  .slide {  
    width: 1024px;  
    height: 320px;  
    margin: 0 auto;  
    margin-top: 50px;  
    overflow: hidden;  
    position: relative;  
  }  
  .slideshow {  
    width: 1024px;  
    height: 320px;  
  }  
  li {  
    position: absolute;  
  }  
  img {  
    width: 1024px;  
    height: 320px;  
  }  
  .bar {  
    position: absolute;  
    width: 100%;  
    bottom: 10px;  
    margin: 0 auto;  
    z-index: 10;  
    text-align: center;  
  }  
  .bar span {  
    width: 20px;  
    height: 5px;  
    border: 1px solid;  
    background: white;  
    display: inline-block;  
    margin-right: 10px;  
  }  
  .active {  
    background: red !important;  
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
