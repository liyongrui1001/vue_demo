<template>
  <div class="reg">
      <div class="mobile">
             
        <!--header 开始-->
        <header>
            <div class="header"> <a class="new-a-back" href="javascript:history.back();"> <span><img src="src/assets/images/iconfont-fanhui.png"></span> </a>
            <h2>一起惠返利网·注册</h2>
            </div>
        </header>
        <!--header 结束-->
        
        <div class="w main">
            <form id="frm_login" method="post" action="">
                <div class="item item-username">
                    <input id="username" class="txt-input txt-username" type="text" placeholder="请输入用户名" value="" name="username" v-model="username">
                    <b class="input-close" style="display: none;"></b> 
                </div>
                <div class="item item-password">
                    <input id="password" class="txt-input txt-password ciphertext" type="password" placeholder="请输入密码" name="password" style="display: inline;" v-model="password">
                    <input id="ptext" class="txt-input txt-password plaintext" type="text" placeholder="请输入密码" style="display: none;" name="ptext">
                </div>
                <div class="item item-password">
                    <input id="password_PwdTwo" class="txt-input txt-password_PwdTwo ciphertext_PwdTwo" type="password" placeholder="确认密码" name="password_PwdTwo" style="display: inline;">
                    <input id="ptext_PwdTwo" class="txt-input txt-password_PwdTwo plaintext_PwdTwo" type="text" placeholder="确认密码" style="display: none;" name="ptext_PwdTwo">
                </div>
                <div class="item item-username">
                    <input id="username" class="txt-input txt-username" type="text" placeholder="请输入邮箱" value="" name="username" v-model="email">
                    <b class="input-close" style="display:none;"></b> 
                </div>
                <div class="item item-username">
                    <input id="username" class="txt-input txt-username" type="text" placeholder="请输入QQ号码" value="" name="username" v-model="qq">
                    <b class="input-close" style="display:none;"></b> 
                </div>
                <div class="item item-captcha">
                    <div class="err-tips"> 注册即视为同意 <a target="_blank" href="javascript:;">用户服务协议</a> </div>
                </div>
                <div class="ui-btn-wrap"> <a class="ui-btn-lg ui-btn-primary" href="javascript:;" @click="reg">用户注册</a> </div>
                <div class="ui-btn-wrap"><router-link to="/login" class="ui-btn-lg ui-btn-danger">已有账号？立即登录</router-link>  </div>
            </form>
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
                password:"",
                email:"",
                qq:""
            }
        },
        components:{
            returntop
        },
        methods:{
            reg(){
                
                this.axios({
                    url:"http://localhost:3000/reg",
                    method:"post",
                    data:{
                        username:this.username,
                        password:this.password,
                        email:this.email,
                        qq:this.qq
                    }
                }).then((res)=>{
                    // console.log(res);
                    if(res.data.err==0){
                        this.$router.push({path:"/regok"});
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
</style>