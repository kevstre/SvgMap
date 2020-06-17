import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/router.js'
import axios from 'axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@/assets/css/spacing.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
    faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload);
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
})
Vue.use(VueRouter)

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
