<template>
  <div class="user">
      <div class="mobile">
             
        <!--header 开始-->
        <header>
            <div class="header"> <a class="new-a-back" href="javascript:history.back();"> <span><img src="src/assets/images/iconfont-fanhui.png"></span> </a>
            <h2>会员中心</h2>
            <div class="header_right shaixuan"><router-link to="/index"><img src="src/assets/images/iconfont-shouye.png"></router-link></div>
            </div>
        </header>
        <!--header 结束-->

            <div class="user_top w">
                <div class="user_logo"><div class="img"><img src="src/assets/images/user_logo.jpg"></div></div>
                <div class="user_info">
                    <div class="user_name" v-show="islogin">{{user.username}}</div>
                    <div class="weidenglu" v-show="!islogin" style="color:white"><router-link to="/login">登陆</router-link>&ensp;|&ensp;<router-link to="/reg">注册</router-link></div>
                    <div class="user_dengji" v-show="islogin">会员等级：{{user.level}}</div>
                </div>
            </div>
            <div class="user_nav_list w">
                <ul>
                    <li>
                        <router-link to="/index">
                            <div class="u_nav_icon money"></div>
                            <div class="u_nav_name">我的现金</div>
                            <div class="nt_icon"></div>
                            <div class="u_money"><i>0.00元</i></div>
                    </router-link>
                    </li>
                    <li>
                        <router-link to="/index">
                            <div class="u_nav_icon huibi"></div>
                            <div class="u_nav_name">我的惠币</div>
                            <div class="nt_icon"></div>
                            <div class="u_money"><i>0.00个</i></div>
                    </router-link>
                    </li>
                    <li>
                        <router-link to="/index">
                            <div class="u_nav_icon tixian"></div>
                            <div class="u_nav_name">金额提现</div>
                            <div class="nt_icon"></div>
                            <div class="u_money"><i>0.00元</i></div>
                    </router-link>
                    </li>
                    <li>
                        <router-link to="/index">
                            <div class="u_nav_icon tixian"></div>
                            <div class="u_nav_name">惠币兑换</div>
                            <div class="nt_icon"></div>
                            <div class="u_money"><i>0个</i></div>
                    </router-link>
                    </li>
                    <li>
                        <router-link to="/index">
                            <div class="u_nav_icon dingdan"></div>
                            <div class="u_nav_name">我的订单</div>
                            <div class="nt_icon"></div>
                            <div class="u_money"><i>0笔</i></div>
                    </router-link>
                    </li>
                    <li>
                        <a @click="ech">
                            <div class="u_nav_icon qiandao"></div>
                            <div class="u_nav_name">我的消费情况</div>
                            <div class="nt_icon"></div>
                            <div class="u_money"><i>点我进来看</i></div>
                    </a>
                    </li>
                    <li>
                        <router-link to="/mail">
                            <div class="u_nav_icon znx"></div>
                            <div class="u_nav_name">站内消息</div>
                            <div class="nt_icon"></div>
                            <div class="u_money"><i>0条</i></div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/index">
                            <div class="u_nav_icon anquan"></div>
                            <div class="u_nav_name">安全中心</div>
                            <div class="nt_icon"></div>
                    </router-link>
                    </li>
                </ul>
            </div>
        <div class="login_out w"><a href="javascript:void(0);" @click="tuichu"><span><img src="src/assets/images/iconfont-tuichu.png"></span><i>安全退出</i></a></div>
       
        </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { MessageBox } from 'mint-ui';
export default {
  data() {
    return {
      // ok:false,
      user: {}
    };
  },
  methods: {
    tuichu() {
      MessageBox.confirm("确定要退出吗？", "提示").then(()=>{
        this.axios({
          url: "http://localhost:3000/tui",
          method: "get",
          withCredentials: true
        })
          .then(res => {
            // console.log(res.data);
            if (res.data.err == 0) {
              MessageBox.alert(res.data.msg, "提示");
              this.loginNo();
            }
          })
          .catch(res => {
            console.log(res);
          });
        },()=>{
          return;
        })
    },
    ech(){
      if(this.userid){
        this.$router.push({ path: "/echarts" });
      }else{
        MessageBox.confirm("暂未登陆，是否去登陆？", "提示").then(()=>{
          this.$router.push({ path: "/login" });
        },()=>{
          return;
        })
      }
    },
    ...mapActions(["setUserId", "setUserName", "loginOk", "loginNo"])
  },
  mounted() {
    this.axios({
      url: "http://localhost:3000/user",
      method: "get",
      withCredentials: true
    })
      .then(res => {
        // console.log(res.data);
        this.user = res.data;
        this.setUserId(this.user.id);
        this.setUserName(this.user.username);

        if (res.data.err == 0) {
          this.loginOk();
        } else {
          this.loginNo();
        }
      })
      .catch(res => {
        console.log(res);
      });
  },
  computed: {
    ...mapGetters(["userid", "islogin", "username"])
  }
  // computed:mapGetters([
  //     "userid"
  // ])
};
</script>
<style>
@import "../assets/css/user.css";
.weidenglu a {
  text-decoration: none;
  color: #fff;
}
</style>