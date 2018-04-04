import * as types from '../mutation-types'
import * as config from '../../tools/config'
const state = {
  isLoading: false,
  baseUrl: config.API_ROOT,
  recordData: {
    recordName: '',
    shelvesId: '',
    floorCount: 0,
    picturesList: [],
    standardPlacedDtoList: []
  }
}
const getters = {
}
const mutations = {
  [types.UPDATE_LOADING_STATUS] (state, payload) {
    state.isLoading = payload.isLoading
  },
  recordData: (state, data) => {
    state.recordData = data
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
