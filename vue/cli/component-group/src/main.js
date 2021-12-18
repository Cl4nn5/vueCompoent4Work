import Vue from 'vue';
import Index from './Index.vue';
// import '.style/style.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(Index),
}).$mount('#app')
