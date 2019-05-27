require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/HomeComponent';
import Main from './components/MainComponent';
import Form from './components/FormComponent';

Vue.component('navigation', require('./components/template/Navigation.vue').default);
Vue.component('main-component', require('./components/MainComponent.vue').default);

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/consult', component: Main },
    { path: '/form', component: Form }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');
