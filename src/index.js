import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import store from './store';

Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App },
    render: h => h(App),
});
