<template>
  <div>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'
export default {
  components: {
    Loading
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.common.isLoading
    })
  }
}
</script>

<style scoped>
</style>
