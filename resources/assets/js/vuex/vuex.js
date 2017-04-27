import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: require('./state.vuex.js'),
    getters: require('./getters.vuex.js'),
    mutations: require('./mutations.vuex.js'),
    actions: require('./actions.vuex.js')
})