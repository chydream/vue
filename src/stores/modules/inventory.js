import * as types from '../mutation-types'

const state = {
  isLoading: false,
  baseUrl: 'http://demo.jaaint.com',
  inventoryData: []
}
const getters = {
}
const mutations = {
  [types.UPDATE_LOADING_STATUS] (state, payload) {
    state.isLoading = payload.isLoading
  },
  [types.ADD_INVENTORY_DATA] (state, item) {
    state.inventoryData.push(item)
  },
  [types.DELETE_INVENTORY_DATA] (state, i) {
    state.inventoryData.splice(i, 1)
  },
  [types.DELETE_ALL_INVENTORY_DATA] (state) {
    state.inventoryData = []
  }
}
const actions = {
}
export default{
  state,
  getters,
  actions,
  mutations
}
