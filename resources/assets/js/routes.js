import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Page1 from './components/Page1.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/page1', component: Page1 }
    ]
})