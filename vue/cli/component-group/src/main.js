import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Index from './Index.vue'

Vue.use(Vuex);
Vue.use(VueRouter)

const store = new Vuex.Store({
  // ...
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
});

store.commit('increment');
console.log(store.state.count);

// import '.style/style.scss';


Vue.config.productionTip = false

export const EventBus = new Vue()
  
new Vue({
  render: h => h(Index),
}).$mount('#app')
