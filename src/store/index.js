import categoryModule from "@/store/category";
import statusModule from "@/store/status";
import productModule from "@/store/product";
import loginModule from "@/store/login";
import cartdetailModule from "@/store/cartdetail";
import {createStore} from "vuex";
export default new createStore({
  modules: {
    categoryModule,
    statusModule,
    productModule,
    loginModule,
    cartdetailModule,
  },
  state: {},
  getters: {},
  mutations: {},
});
