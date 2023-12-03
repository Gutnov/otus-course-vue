import { createApp } from 'vue';
import { Quasar } from 'quasar';
import quasarLang from 'quasar/lang/ru';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import router from './router/index.js';

import './style.css';
import App from './App.vue';

const myApp = createApp(App);
myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang
});
myApp.use(router);

myApp.mount('#app');
