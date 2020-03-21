import Vue from 'vue'
import Vuex from 'vuex'
import { getCookie } from "../untils/cookie";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginIsShow: true,
    dialogFlag: false,
    isLogin: getCookie('webUser') === null ? true : false
  },
  mutations: {
    changeLoginIsShow(state, value) {
      if (state.loginIsShow != value) {
        state.loginIsShow = value;
      }
      state.dialogFlag = true;
    },
    changeDialogFlag(state, value) {
      state.dialogFlag = value;
    },
    changeLogin(state, value) {
      state.isLogin = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
