<template>
  <div class="login">
      <div class="mobile">
          
        <!--header 开始-->
        <header>
            <div class="header"> <a class="new-a-back" href="javascript:history.back();"> <span><img src="src/assets/images/iconfont-fanhui.png"></span> </a>
            <h2>一起惠返利网·登录</h2>
            
            </div>
        </header>
        <!--header 结束-->
        
        <div class="w main">
            
                <div class="item item-username">
                    <input id="username" class="txt-input txt-username" type="text" placeholder="请输入用户名/邮箱/手机号" value="" name="username" v-model="username">
                    <b class="input-close" style="display: none;"></b> </div>
                <div class="item item-password">
                    <input id="password" class="txt-input txt-password ciphertext" type="password" placeholder="请输入密码" name="password" style="display: inline;" v-model="password">
                    <input id="ptext" class="txt-input txt-password plaintext" type="text" placeholder="请输入密码" style="display: none;" name="ptext">
                
                </div>
                <div class="item item-login-option">
                    
                    <span class="retrieve-password"> <a class="" href="javascript:;"> 找回密码</a> </span>
                </div>
                <div class="ui-btn-wrap"><input name=""  value="用户登录"  class="ui-btn-lg ui-btn-primary" @click="login" /> </div>
                <div class="ui-btn-wrap"> <router-link to="/reg" class="ui-btn-lg ui-btn-danger">没有账号？立即注册</router-link> </div>
            <div class="item item-login-other">
                <dl>
                    <dt>其它登录方式</dt>
                    <dd> <a class="qq" href="javascript:;"> <span><img alt="" src="src/assets/images/login_qq.png" width="40" height="40"></span> </a> </dd>
                </dl>
                </div>
            
        </div>
            
        <returntop></returntop>
        <slot></slot>
        
        </div>
  </div>
</template>
<script>
    import returntop from "./returntop.vue";
    export default{
        data(){
            return{
                username:"",
                password:""
            }
        },
        components:{
            returntop
        },
        methods:{
            login(){
                this.axios({
                    url:"http://localhost:3000/login",
                    method:"post",
                    data:{
                        username:this.username,
                        password:this.password
                    },
                    withCredentials:true //跨源凭证
                }).then((res)=>{
                    // console.log(res);
                    if(res.data.err==0){
                        this.$router.push({path:"/user"});
                    }else{
                        alert(res.data.msg);
                    }
                }).catch((res)=>{
                    console.log(res);
                })
            }
        }
    }
    
	
	
</script>
<style>
    @import "../assets/css/login.css";
    @import "../assets/frozenui/css/frozen.css";
</style>
