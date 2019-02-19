/**
 * Created by 27136 on 2019/2/18.
 */
/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

new Vue({
  el: '#app',
  /*components: { App },
  template: '<App/>',*/
  render: h => h(App),
  router
})
