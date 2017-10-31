require('./bootstrap');

window.Vue = require('vue');

let Home = require('./components/Home.vue');

const app = new Vue({
    el: '#app',
    components:{
      Home
    }
});
