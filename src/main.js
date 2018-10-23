// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueCordova from 'vue-cordova';

import firebase from 'firebase';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader

import axios from 'axios';

import App from './App';
import router from './router';

import { store } from './store/store';
import firebasePackage from './Packages/Firebase';

Vue.use(Vuetify);
Vue.use(VueCordova);
Vue.use(firebasePackage);

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://198.13.50.135/api';

const config = {
  apiKey: 'AIzaSyBuAS1WyhIjCPCDImFedIQSJlKhpQnhSI0',
  authDomain: 'cultureline-664f1.firebaseapp.com',
  databaseURL: 'https://cultureline-664f1.firebaseio.com',
  projectId: 'cultureline-664f1',
  storageBucket: 'cultureline-664f1.appspot.com',
  messagingSenderId: '232592528570',
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data() {
    return {
      cordova: Vue.cordova,
    };
  },
});
