import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/base.css';
import '@/assets/css/common.css';
import 'jquery-nice-select/js/jquery.nice-select'
import 'jquery-nice-select/css/nice-select.css';
// import '@/utils/common.js'
import '@/utils/bupjungdong.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
