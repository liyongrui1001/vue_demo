<template>
  <div class="newslist">
      <div class="mobile">
            
        <!--header 开始-->
        <header>
            <div class="header"> <a class="new-a-back" href="javascript:history.back();"> <span><img src="src/assets/images/iconfont-fanhui.png"></span> </a>
            <h2>互联网新闻</h2>
            <div class="head_right" style="top:13px;"><router-link to="/newsindex" style="color:#FFFFFF; font-size:14px;">返回资讯</router-link></div>
            </div>
        </header>
        <!--header 结束-->
        <div class="search w">
            <form action="" method="get">
                <input name="" type="text" class="search_input" placeholder="请输入关键字"><input name="" type="button" class="search_submit" value="搜索">
            </form>
        </div>
            <div class="news_index w">
                <ul class="ui-list ui-list-text ui-border-tb">
                    <router-link :to="'/newsview/'+item.id" v-for="(item,index) in newslist" :key="item.id">
                    <li class="ui-border-t list">
                        <div class="ui-list-info">
                            <h4>{{item.title}}</h4>
                        </div>
                        <!-- <div class="ui-badge-muted">123</div> -->
                    </li>
                    </router-link>
                </ul>
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
                newslist:[]
            }
        },
        components:{
            returntop
        },
        mounted(){
            this.axios({
                url:"http://localhost:3000/news",
                method:"get"
            }).then((res)=>{
                // console.log(res)
                this.newslist=res.data;
            }).catch((res)=>{
                console.log(res);
            })
        }
    }
</script>
<style>
    @import "../assets/css/news.css";
    @import "../assets/frozenui/css/frozen.css";
</style>

