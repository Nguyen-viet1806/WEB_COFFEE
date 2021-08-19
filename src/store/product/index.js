import actions from './actions'
import mutations from './mutations'
import getters from './getters'


const state = {
    listProduct: [],
    listProductAllPage:[],
}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
  }