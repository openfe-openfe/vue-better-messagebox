import Vue from 'vue'
import App from './App'

import {Alert, Confirm, Toast} from './vue-better-messagebox'

Vue.use(Alert);
Vue.use(Confirm);
Vue.use(Toast);


new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
});