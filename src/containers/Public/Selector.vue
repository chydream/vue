<template>
  <div class="selector">
    <loading v-model="isLoading"></loading>
    <group>
      <popup-picker :title="title1" :data="list1" v-model="value1"></popup-picker>
    </group>
    <div class="selector-list">
      <ul class="list-select">
        <li class="active"><span>全部门店</span></li>
        <li><span>白马店</span></li>
        <li><span>白马店</span></li>
      </ul>
    </div>
    <group>
      <popup-picker :title="title1" :data="list1" v-model="value1"></popup-picker>
    </group>
    <div class="selector-list">
      <ul class="list-select">
        <li><span>全部门店</span></li>
        <li><span>白马店</span></li>
        <li><span>白马店</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Loading, PopupPicker, Group } from 'vux'
import { mapState } from 'vuex'
export default {
  components: {
    Loading,
    PopupPicker,
    Group
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      title1: '门店范围',
      list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
      value1: ['iPhone']
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.common.isLoading
    })
  }
}
</script>

<style scoped lang="less">
.selector{
  background: #fff;
  .selector-list{
    padding: 10px 15px;
  }
  .list-select li{
    display: inline-block;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .list-select li span{
    min-width: 66px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    background: #edf4fa;
    color: #999;
    font-size: 14px;
    border-radius: 4px;
    padding: 0 5px;
  }
  .list-select li.active span{
    background: #2181d2;
    color: #fff;
  }
}
</style>
