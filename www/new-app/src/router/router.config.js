import baoliao from '../components/baoliao.vue';
import baoliaoview from '../components/baoliaoview.vue';
import index from '../components/index.vue';
import login from '../components/login.vue';
import mail from '../components/mail.vue';
import mall from '../components/mall.vue';
import newsindex from '../components/newsindex.vue';
import newslist from '../components/newslist.vue';
import newsview from '../components/newsview.vue';
import reg from '../components/reg.vue';
import regok from '../components/regok.vue';
import taobao from '../components/taobao.vue';
import user from '../components/user.vue';
import shopcar from '../components/shopcar.vue';
import echarts from '../components/echarts.vue';
const routes=[
  {path:'/baoliao',component:baoliao},
  {path:'/baoliaoview/:id',component:baoliaoview},
  {path:'/index',component:index},
  {path:'/login',component:login},
  {path:'/mail',component:mail},
  {path:'/mall',component:mall},
  {path:'/newsindex',component:newsindex},
  {path:'/newslist',component:newslist},
  {path:'/newsview/:id',component:newsview},
  {path:'/reg',component:reg},
  {path:'/regok',component:regok},
  {path:'/taobao',component:taobao},
  {path:'/user',component:user},
  {path:'/shopcar',component:shopcar},
  {path:'/echarts',component:echarts},
  {path:'/',redirect:'/index'}
];
export default {
  routes,
  mode:'history'
};