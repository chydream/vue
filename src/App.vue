<template>
  <div id="app">
  	<loading v-model="loading"></loading>
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
    setTimeout(() => {
      this.loading = false
    }, 500)
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
