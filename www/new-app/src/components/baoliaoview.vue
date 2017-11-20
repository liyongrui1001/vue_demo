<template>
  <div class="baoliaoview">
      <div class="mobile">
	
  <!--header 开始-->
  <header>
    <div class="header"> <a class="new-a-back" href="javascript:window.history.go(-1);"> <span><img src="http://localhost:8080/src/assets/images/iconfont-fanhui.png"></span> </a>
      <h2>爆料详情</h2>
      <div class="head_right" style="top:13px;"><router-link to="/index" style="color:#FFFFFF; font-size:14px;">返回首页</router-link></div>
    </div>
  </header>
  <!--header 结束-->
  <div class="search w">
    <form action="" method="get">
        <input name="" type="text" class="search_input" placeholder="请输入您想要查找的爆料"><input name="" type="button" class="search_submit" value="搜索">
    </form>
  </div>
  <div class="view w">
  	<div class="bl_view_img"><img :src="'http://localhost:8080/'+bllist.src" /></div>
    <div class="bl_view_title"><span class="bl_type">白菜</span><span class="bl_type" style="background-color:#53bf1e;">活动</span><span class="bl_type" style="background-color:#00bb9c;">优质</span>{{this.bllist.title}} </div>
    <div class="bl_view_note">{{bllist.note}}</div>
    <div class="bl_view_tag">
   		<div class="bl_view_price">￥{{bllist.price}}</div>
        <div class="bl_view_oprice">￥{{bllist.oprice}}</div>        
        <div class="bl_view_mall">商城：{{bllist.mall}}</div>
    </div>
    <div class="bl_view_tag">
    	<div class="bl_view_user">爆料者：{{bllist.peo}}</div>
        <div class="bl_view_time">人气：{{bllist.num}}次浏览</div>
    </div>
    <div class="bl_view_tag">
    	<div class="bl_view_user">喜欢：{{bllist.love}}人喜欢</div>
        <div class="bl_view_time">时间：2017-{{bllist.time|date}}</div>
    </div>
    <div class="go_buy">
        <a href="javascript:;" @click="buy()">加入购物车</a>
        <a @click="gobuy" class="go-buy2">进入购物车</a>
        <!-- <router-link to="/shopcar" class="go-buy2">进入购物车</router-link> -->
    </div>
  </div>
  
  <div class="bl_view_content w">
  	<h1>推荐理由<span>优质爆料QQ群①：186666517</span></h1>
    <div class="bl_view_word">
    	 <p>
	飞利浦PHILIPS LED球泡5W/E27日光色4连包，<a href="javascript:;">京东商城售价109元</a>，可以参加满200-60的活动，例如凑单2套，折合79元/套，不到20元/个，其它渠道都在39元/个左右。</p>
<p>
	飞利浦PHILIPS LED球泡5W/E27日光色4连包，功率为5W，色温：6500K，家庭装修、商场、展示厅、酒店、办公室等，可直接替换相同灯座的灯泡。
</p>      
<p>
	特步男鞋跑步鞋男士运动鞋新款休闲鞋网面透气跑步鞋减震超轻慢跑鞋男 灰黄 42
</p>
<p>
	<strong>京东6月17日活动秒杀  10点 61.8元秒杀</strong>
</p>
<p>
	<img src="http://localhost:8080/src/assets/images/1434503287905.jpg" />
</p>         
 
    </div>
  </div>
  
  <div class="bl_comment w">
 	 <h1>猜您还喜欢</h1>
     <div class="comment_list">
     	<ul class="ui-list ui-border-tb">  
            <router-link to="/baoliaoview" tag="li">
                <div class="ui-list-thumb ui-avatar-s">
                   <span><img :src="'http://localhost:8080/'+bllist.src" /></span>                
                </div>
                <div class="ui-list-info ui-border-t">
                    <h4>{{bllist.title}} </h4>
                    <p>{{bllist.note}}</p>
                    <p style="color:#FF6600">{{bllist.price}}</p>
                </div>
            </router-link>
        </ul>
     </div>
  </div>
  
  <div class="bl_pinlun w">
  	<form action="" method="get"><input name="" type="text" placeholder="我来说一句" class="pinlun_input"><input name="" type="button" class="pinlun_submit" value="发表评论"></form>
  </div>
  <!--<div class="no_login w">您需要登录才能发表牛评哦！<a href="#">马上登录</a><a href="#">免费注册</a></div>-->
  
  <div class="bl_comment w">
  	<h1>TA们的牛评（1）</h1>
    <div class="comment_list">
    	<ul>
        	<li>
       	  	  <div class="pl_user_img"><img src="http://localhost:8080/src/assets/images/24_avatar_middle.jpg" /></div>
              <div class="pl_user_top">
                  <div class="pl_user_name">{{bllist.ping}}</div>
                  <div class="pl_user_time">{{bllist.pingt}}天前</div>
              </div>
              <div class="pl_user_comment">{{bllist.pingyu}}</div>
            </li>
            
        </ul>
    </div>
  </div>
  
  <returntop></returntop>
        <slot></slot>
  
</div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import { mapActions, mapGetters } from "vuex";
import returntop from "./returntop.vue";
export default {
  data() {
    return {
      bllist: []
    };
  },
  components: {
    returntop
  },
  mounted() {
    this.axios({
      url: "http://localhost:3000/baoliaoview",
      method: "get",
      params: {
        id: this.$route.params.id
      }
    })
      .then(res => {
        // console.log(res);
        this.bllist = res.data[0];
        // console.log(this.bllist)
      })
      .catch(res => {
        console.log(res);
      });
  },
  methods: {
    buy() {
      
      if (this.userid) {
        this.axios({
          url: "http://localhost:3000/shopcar",
          method: "post",
          data: {
            gid: this.bllist.id,
            count: 1,
            price: this.bllist.price,
            title: this.bllist.title,
            src: this.bllist.src
          }
        })
          .then(res => {
            if (!res.data.err) {
              MessageBox.alert("加入购物车成功", "提示");
              this.bllist.count = res.data.count;
              this.$store.dispatch("addItem", this.bllist);
            }
          })
          .catch(res => {
            console.log(res);
          });
      } else {
        MessageBox.confirm("暂未登陆，是否去登陆？", "提示").then(()=>{
          this.$router.push({ path: "/login" });
        },()=>{
          return;
        })
      }
    },
    gobuy() {
      // alert(1)
      if (this.userid) {
        this.axios({
          url: "http://localhost:3000/gobuy",
          method: "post"
        })
          .then(res => {
            this.$store.dispatch("addItems", res.data);
            this.$router.push({ path: "/shopcar" });

            // router.push("shopcar")
          })
          .catch(res => {
            console.log(res);
          });
      } else {
        MessageBox.confirm("暂未登陆，是否去登陆？", "提示").then(()=>{
          this.$router.push({ path: "/login" });
        },()=>{
          return;
        })
      }
    }
  },
  computed: {
    ...mapGetters(["userid"])
  }
};
</script>
<style>
@import "../assets/css/baoliao.css";
@import "../assets/frozenui/css/frozen.css";
</style>
