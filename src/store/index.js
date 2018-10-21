import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    userInfo: {
      header: '',
      username: '',
      id : '',
      homedown: '',
      address: '',
      nation: '',
      wxNum: '',
      qqNum: '',
      sex: '',
      education: '',
      jobRank: '',
      salary: '',
      joinPartyTime: '',
      lastPayTime: '',
      partyIdentity: ''
    },
    token : ''
  },
  mutations: {
    'CHANGE_USERINFO'(state, payload) {
      state.userInfo = payload
    },
    'SET_TOKEN'(state,token) {
      state.token = token;
    },
    'DEL_TOKEN'(state) {
      state.token = '';
      sessionStorage.removeItem('token')
    }

  },
    actions: {},

    plugins: [
      createPersistedState({
              storage: {
                getItem: key => sessionStorage.getgetItem(key),
                // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
                setItem: (key, value) =>
                  sessionStorage.setItem(key, value),
                removeItem: key => sessionStorage.removeItem(key),
              },
            }),
    ],
})

export default store;
