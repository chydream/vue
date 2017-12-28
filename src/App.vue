<template>
  <div id="app">
  	<loading v-model="isLoading"></loading>
  	<!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
export default {
  components: {
    Loading
  },
  name: 'app',
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  },
  mounted () {
    // console.log(this.$store.state.vux.isLoading)
  },
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
