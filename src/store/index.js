import Vuex from 'vuex';
import Vue from 'vue';
import ui from './modules/ui';
import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({ 
    actions,
    modules: { ui },
    strict: true
});

export default store;
