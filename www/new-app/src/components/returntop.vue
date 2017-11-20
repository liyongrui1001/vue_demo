<template>
  <div class="returntop">
      <div class="m_user w">
        <router-link to="/user" v-show="islogin">{{username}}</router-link>
        <a @click="tuichu" v-show="islogin">退出</a>
        <router-link to="/login" v-show="!islogin">登录</router-link>
        <router-link to="/reg" v-show="!islogin">注册</router-link>
        <a href="javascript:void(0);" class="backtop">返回顶部</a>  
    </div>
    <div class="gotop backtop" style="display:none;"></div>
  </div>
</template>
<script>
    import {mapActions,mapGetters} from "vuex";
    import { MessageBox } from 'mint-ui';
    export default{
        mounted(){
            $(window).scroll(function () {
                var scrollHeight = $(document).height();
                var scrollTop = $(window).scrollTop();
                var $windowHeight = $(window).innerHeight();
                scrollTop > 75 ? $(".gotop").fadeIn(200).css("display","block") : $(".gotop").fadeOut(200).css({"background-image":"url('http://localhost/8080/'+src/assets/images/iconfont-fanhuidingbu.png)"});
            });
            $('.backtop').click(function (e) {
                $(".gotop").css({"background-image":"url('http://localhost/8080/'+src/assets/images/iconfont-fanhuidingbu_up.png)"});
                e.preventDefault();
                $('html,body').animate({ scrollTop:0});
            });
        },
        computed:{
            ...mapGetters([
                "userid","islogin","username"
            ])
        },
        methods:{
            tuichu(){
                MessageBox.confirm("确定要退出吗？", "提示").then(()=>{
                    this.axios({
                        url:"http://localhost:3000/tui",
                        method:"get",
                        withCredentials:true
                    }).then((res)=>{
                        // console.log(res.data);
                        if(res.data.err==0){
                            MessageBox.alert(res.data.msg, "提示");
                            this.loginNo()
                        }
                    }).catch((res)=>{
                        console.log(res);
                    })
                },()=>{
                    return;
                })
            },
            ...mapActions([
                "loginNo"
            ])
        }
    }
</script>
<style>
    @import "../assets/css/index.css";
</style>
