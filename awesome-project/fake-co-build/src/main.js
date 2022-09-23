/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import XComponents from '@triascloud/x-components';
import { globalVueI18n } from '@triascloud/i18n';

Vue.use(Antd);
Vue.use(XComponents, {
  scriptUrl: '//at.alicdn.com/t/font_2003313_kr0dxwmzqis.js',
  scriptColorUrl: '//at.alicdn.com/t/font_2070557_sm0h8cz4pde.js',
});
Vue.prototype.$developing = XComponents.Developing.createModal;
Vue.use(globalVueI18n, {
  defaultLocale: 'zh_CN',
  defaultModule: 'co',
  renderEmpty: key => key,
});

Vue.config.productionTip = false;

function bootstrap() {
  console.log('hello');
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
}

bootstrap();
