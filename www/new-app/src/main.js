import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
Vue.use(VueRouter);

import routes from "./router/router.config.js";
const router =new VueRouter(routes);

import axios from "axios";
// axios.defaults.withCredentials=true; //携带跨源凭证

//配置拦截器
axios.interceptors.request.use(function (config) {
  // 在发出正确请求之前做点事
  store.dispatch('showLoading');
  return config;// 返回现在配置给拦截器,一定要反绘制
}, function (error) {
  // 在发出错误请求之前做点事
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  // 在响应之后做点事
  store.dispatch('hideLoading');
  return response;  // 回来的数据对象
}, function (error) {
  return Promise.reject(error);
});

Vue.prototype.axios=axios;
// console.log(axios);

//状态管理
import store from"./store";

//全局过滤
import filters from "./filters";
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));

//全局loading
import loading from "./loading";
Vue.use(loading);

//全局引入mintui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

//上拉加载下拉刷新
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

// 引入echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts 

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
