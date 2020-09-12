import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

import DefaultLayout from './layouts/default'

Vue.config.productionTip = false

//register layouts
Vue.component('default-layout', DefaultLayout);

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    randomPagesString: ""
  },
  mutations: {
    concatCharacter(state, char) {
      state.randomPagesString += char;
    },
    resetRandomPagesString(state) {
      state.randomPagesString = "";
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
