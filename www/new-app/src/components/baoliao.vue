<template>
  <div class="baoliao">
      <div class="mobile">
        
        <!--header 开始-->
        <header>
          <div class="header"> <a class="new-a-back" href="javascript:window.history.go(-1);"> <span><img src="src/assets/images/iconfont-fanhui.png"></span> </a>
            <h2>优惠爆料</h2>
            <div class="header_right shaixuan"><img src="src/assets/images/iconfont-shaixuan.png"></div>
          </div>
        </header>
        <!--header 结束-->
          <div class="search w">
              <form action="" method="get">
                  <input name="" type="text" class="search_input" placeholder="请输入您想要查找的爆料"><input name="" type="button" class="search_submit" value="搜索">
              </form>
            </div>

        <div class="baoliao w">
          <div class="ui-tab">
          <ul class="ui-tab-nav">
                  <li class="current"><a href="javascript:;">最新爆料</a></li>
                  <li><a href="javascript:;">优质爆料</a></li>
                  <li><a href="javascript:;" >热门排行</a></li>
                  <li><a href="javascript:;" >白菜汇</a></li>
            </ul>
            <div class="ui-tab-content">
              
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
        </div>
        <!--筛选-->
        
        <div class="shaixuan_box">
        <div class="shaixuan_mall">
            <h1>商城筛选</h1>
              <div class="shaixun_item">
                  <a href="javascript:;" class="current">全部商城</a>
                  <a href="javascript:;">京东商城</a>
                  <a href="javascript:;">亚马逊</a>
                  <a href="javascript:;">苏宁易购</a>
                  <a href="javascript:;">一号店</a>
                  <a href="javascript:;">天猫商城</a>
                  <a href="javascript:;">易迅网</a>
                  <a href="javascript:;">健一网</a>
                  <a href="javascript:;">国美在线</a>
                  <a href="javascript:;">当当网</a>
                  <a href="javascript:;">亚马逊</a>
                  <a href="javascript:;">我买网</a>
                  <a href="javascript:;">优购商城</a>
                  <a href="javascript:;">新蛋</a>
                  <a href="javascript:;">顺丰优选</a>
                  <a href="javascript:;">京东商城wap端</a>
                  <a href="javascript:;">飞飞商城</a>
                  <a href="javascript:;">为为网</a>
                  <a href="javascript:;">淘宝网</a>
                  <a href="javascript:;">沱沱工社</a>
                  <a href="javascript:;">银泰网</a>
                  <a href="javascript:;">唯品会</a>
                  <a href="javascript:;">可得眼镜</a>
                  <a href="javascript:;">华强北商城</a>
                  <a href="javascript:;">天天网</a>
                  <a href="javascript:;">母婴之家</a>
                  <a href="javascript:;">聚美优品</a>
                  <a href="javascript:;">知我药妆</a>
                  <a href="javascript:;">1号药网</a>
                  <a href="javascript:;">酒仙网</a>
                  <a href="javascript:;">尚妆网</a>
            </div>
              <p><a href="javascript:;" class="shaixuan_colos">关闭</a></p>
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
            return {
                bllist:[]
            }
        },
        mounted(){
            this.axios({
                url:"http://localhost:3000/baoliao",
                method:"get"
            }).then((res)=>{
                // console.log(res);
                this.bllist=res.data;
                // console.log(this.bllist)
            }).catch((res)=>{
                console.log(res);
            });
            $(".shaixuan").click(function(event){
                event.stopPropagation(); 
                $(".shaixuan_box").show();
                $(".shaixuan_box").animate({right:'100%'});
                $("body,html").css("overflow","hidden");
                $(".shaixuan_box").css("overflow","auto");
                $('body').bind("touchmove",function(e){    
                    e.preventDefault();    
                });
            });
            $(".shaixuan_mall a").click(function(event){
                $("body,html").css("overflow","auto");
                $(".shaixuan_box").animate({right:'-100%'});
                $(".shaixuan_box").hide(5);	
                $("body").unbind("touchmove");  
            });
        },
        components:{
            returntop
        }
    }

	
	

</script>
<style>
  @import "../assets/css/baoliao.css";
</style>
