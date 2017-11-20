<template>
  <div class="newsindex">
        <div class="mobile">
             
        <!--header 开始-->
        <header>
            <div class="header"> <a class="new-a-back" href="javascript:history.back();"> <span><img src="src/assets/images/iconfont-fanhui.png"></span> </a>
            <h2>购物资讯</h2>
            <div class="head_right" style="top:13px;"><router-link to="/index" style="color:#FFFFFF; font-size:14px;">返回首页</router-link></div>
            </div>
        </header>
        <!--header 结束-->
        <div class="search w">
            <form action="" method="get">
                <input name="" type="text" class="search_input" placeholder="请输入关键字"><input name="" type="button" class="search_submit" value="搜索">
            </form>
        </div>
            <div class="news_index w">
                <ul class="ui-list ui-border-tb">  
                    <router-link to="/newslist">
                    <li>
                        <div class="ui-avatar-lg list_left">
                            <span style="background-image:url(src/assets/images/news_01.png)"></span>
                        </div>
                        <div class="ui-list-info ui-border-t">
                            <h4>互联网新闻</h4>
                        <p>每天关注互联网新闻，了解互联网动态！</p>
                            <!-- <div class="ui-badge">123</div> -->
                        </div>
                    </li>
                    </router-link>
                    <router-link to="/mall">
                    <li>
                        <div class="ui-avatar-lg list_left">
                            <span style="background-image:url(src/assets/images/news_02.png)"></span>
                        </div>
                        <div class="ui-list-info ui-border-t">
                            <h4>返利网大全</h4>
                        <p>返利网址导航，最专业的返利网址大全！</p>
                            <!-- <div class="ui-badge">123</div> -->
                    </div>
                    </li>
                    </router-link>
                    <router-link to="/taobao">
                    <li>
                        <div class="ui-avatar-lg list_left">
                            <span style="background-image:url(src/assets/images/news_03.png)"></span>
                        </div>
                        <div class="ui-list-info ui-border-t">
                            <h4>网购技巧</h4>
                        <p>最实用的网购技巧窍门，让你网购不吃亏！</p>
                            <!-- <div class="ui-badge">123</div> -->
                    </div>
                    </li>
                    </router-link>
                    <router-link to="/mail">
                    <li>
                        <div class="ui-avatar-lg list_left">
                            <span style="background-image:url(src/assets/images/news_04.png)"></span>
                        </div>
                        <div class="ui-list-info ui-border-t">
                            <h4>订单结算</h4>
                        <p>每月订单结算信息通告！</p>
                            <!-- <div class="ui-badge">123</div> -->
                    </div>
                    </li>
                    </router-link>
                    <router-link to="/newslist">
                    <li>
                        <div class="ui-avatar-lg list_left">
                            <span style="background-image:url(src/assets/images/news_05.png)"></span>
                        </div>
                        <div class="ui-list-info ui-border-t">
                            <h4>网站公告</h4>
                        <p>发布重要信息、重要通知！</p>
                            <!-- <div class="ui-badge">145</div> -->
                    </div>
                    </li>
                    </router-link>
                    <router-link to="/newslist">
                    <li>
                        <div class="ui-avatar-lg list_left">
                            <span style="background-image:url(src/assets/images/news_06.png)"></span>
                        </div>
                        <div class="ui-list-info ui-border-t">
                            <h4>常见问题</h4>
                        <p>使用网站遇到的一些常见问题！</p>
                            <!-- <div class="ui-badge">1456</div> -->
                    </div>
                    </li>
                    </router-link>
                    <router-link to="/newslist">
                    <li>
                        <div class="ui-avatar-lg list_left">
                            <span style="background-image:url(src/assets/images/news_07.png)"></span>
                        </div>
                        <div class="ui-list-info ui-border-t">
                            <h4>提现问题</h4>
                        <p>资金提现遇到的一些常见问题！</p>
                            <!-- <div class="ui-badge">1456</div> -->
                    </div>
                    </li>
                    </router-link>
                    <router-link to="/mail">
                    <li>
                        <div class="ui-avatar-lg list_left">
                            <span style="background-image:url(src/assets/images/news_08.png)"></span>
                        </div>
                        <div class="ui-list-info ui-border-t">
                            <h4>订单问题</h4>
                        <p>返利订单遇到的一些常见问题！</p>
                            <!-- <div class="ui-badge">1456</div> -->
                    </div>
                    </li>
                    </router-link>
                    <router-link to="/newslist">
                    <li>
                        <div class="ui-avatar-lg list_left">
                            <span style="background-image:url(src/assets/images/news_06.png)"></span>
                        </div>
                        <div class="ui-list-info ui-border-t">
                            <h4>返利问题</h4>
                        <p>使用返利遇到的一些常见问题！</p>
                            <!-- <div class="ui-badge">1456</div> -->
                    </div>
                    </li>
                    </router-link>
                    <router-link to="/newslist">
                    <li>
                        <div class="ui-avatar-lg list_left">
                            <span style="background-image:url(src/assets/images/news_06.png)"></span>
                        </div>
                        <div class="ui-list-info ui-border-t">
                            <h4>站点帮助</h4>
                        <p>丰富的帮助内容，帮您快速解决问题！</p>
                            <!-- <div class="ui-badge">1456</div> -->
                    </div>
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
       components:{
            returntop
        }
   }
</script>
<style>
    @import "../assets/css/news.css";
    @import "../assets/frozenui/css/frozen.css";
</style>
