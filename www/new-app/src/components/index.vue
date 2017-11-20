<template>
  <div class="index">
      <div class="mobile">
        <div class="header">
            <div class="m_logo"><a href="javascript:;"><img src="src/assets/images/m-index_02.png"></a></div>
            <div class="m_search"><a href="javascript:;"><img src="src/assets/images/m-index_05.png" width="40"></a></div>
        </div>
        <div class="top w">
            <swipe></swipe>
            <slot></slot>
            <div class="m_nav">
                <router-link :to="item.router" v-for="(item,index) in indexnav" :key="item.id"><img :src="item.src"><span>{{item.title}}</span></router-link>
                
            </div>
    </div>
    <div class="m_mall w">
        <div class="mall_title"><span>热门商城</span><em><router-link to="/mall">更多</router-link></em></div>
        <div class="mall_list">
            <a href="javascript:;" v-for="(item,index) in malllist" :key="item.id" class="mall"><div class="mall_logo"><img :src="item.src" /></div><span>最高返 <i>{{item.zhe}}</i></span></a>
            
        </div>
    </div>
    <div class="m_baoliao w">
        <div class="baoliao_title"><span>最新爆料</span><em><a href="javascript:;"><img src="src/assets/images/iconfont-shuaxin.png"></a></em></div>
        <div class="baoliao_list">
            <router-link :to="'/baoliaoview/'+item.id" v-for="(item,index) in bllist" :key="item.id">
            <div class="baoliao_content">
                <div class="bl_img"><img :src="'http://localhost:8080/'+item.src" /></div>
                <div class="bl_right">
                    <div class="bl_title">{{item.title}}</div>
                    <div class="bl_note">{{item.note}}</div>
                    <div class="bl_tag">
                        <div class="bl_price">￥{{item.price}}</div>
                        <div class="bl_oprice">￥{{item.oprice}}</div>
                        <div class="bl_time">{{item.time|date}}</div>
                        <div class="bl_mall">{{item.mall}}</div>
                    </div>
                </div>
            </div> 
            </router-link>
        </div>
        <div class="bl_more"><a href="javascript:;">加载更多</a></div>
    </div>
    <returntop></returntop>
    <slot></slot>
    <!-- <div class="m_user w">
        <router-link to="/user" v-show="islogin">忆乡人</router-link>
        <router-link to="/reg" v-show="islogin">退出</router-link>
        <router-link to="/login" v-show="!islogin">登录</router-link>
        <router-link to="/reg" v-show="!islogin">注册</router-link>
        <a href="javascript:void(0);" class="backtop">返回顶部</a>  
    </div>
    <div class="gotop backtop" style="display:none;"></div> -->
    </div>
    
  </div>
</template>
<script>
    import {mapActions,mapGetters} from "vuex";
    import swipe from "./swipe.vue";
    import returntop from "./returntop.vue";
    export default{
        data(){
            return {
                indexnav:[],
                malllist:[],
                bllist:[]
            }
        },
        components:{
            swipe,returntop
        },
        mounted(){
            this.axios({
                url:"http://localhost:3000/indexnav",
                method:"get"
            }).then((res)=>{
                // console.log(res);
                this.indexnav=res.data;
            }).catch((res)=>{
                console.log(res);
            }),
            this.axios({
                url:"http://localhost:3000/malllist",
                method:"get"
            }).then((res)=>{
                // console.log(res);
                this.malllist=res.data;
            }).catch((res)=>{
                console.log(res);
            }),
            this.axios({
                url:"http://localhost:3000/baoliao",
                method:"get"
            }).then((res)=>{
                // console.log(res);
                this.bllist=res.data;
            }).catch((res)=>{
                console.log(res);
            })
            //返回顶部
            // $(window).scroll(function () {
            //     var scrollHeight = $(document).height();
            //     var scrollTop = $(window).scrollTop();
            //     var $windowHeight = $(window).innerHeight();
            //     scrollTop > 75 ? $(".gotop").fadeIn(200).css("display","block") : $(".gotop").fadeOut(200).css({"background-image":"url(src/assets/images/iconfont-fanhuidingbu.png)"});
            // });
            // $('.backtop').click(function (e) {
            //     $(".gotop").css({"background-image":"url(src/assets/images/iconfont-fanhuidingbu_up.png)"});
            //     e.preventDefault();
            //     $('html,body').animate({ scrollTop:0});
            // });
        },
        computed:{
            ...mapGetters([
                "userid","islogin"
            ])
        }
    }



</script>

<style>
    @import "../assets/css/index.css";
</style>
