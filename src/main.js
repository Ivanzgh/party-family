import Vue from 'vue'
import App from './App'
import router from './router'
import $axios from './axios/index'
import store from './store/index'

import { Swipe, SwipeItem,Tab, Tabs,Tabbar, TabbarItem ,Field,Button,Icon,
  Cell,CellGroup,Popup,Uploader,Toast,Dialog ,Picker } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Tabbar).use(TabbarItem)
  .use(Field).use(Button).use(Icon).use(Cell).use(CellGroup).use(Popup)
  .use(Uploader).use(Toast).use(Dialog).use(Picker);

Vue.prototype.$axios = $axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

