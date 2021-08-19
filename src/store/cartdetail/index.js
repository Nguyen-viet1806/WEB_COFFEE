import actions from './actions'
import mutations from './mutations'
import getters from './getters'


const state = {
  listCartDetail: [],
  listBill: [],
  listBillDetail: [],
}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
  }