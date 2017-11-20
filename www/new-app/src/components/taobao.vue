<template>
  <div class="taobao">
      <div class="mobile">
            
        <!--header 开始-->
        <header>
            <div class="header"> <a class="new-a-back" href="javascript:history.back();"> <span><img src="src/assets/images/iconfont-fanhui.png"></span> </a>
            <h2>淘宝返利</h2>
            </div>
        </header>
        <!--header 结束-->
        <div class="tao_search w">
            <form action="" method="get" class="taobao_form">
                <input name="" type="text" class="search_taobao" placeholder="输入任意淘宝/天猫宝贝标题开始购物拿返利！"><input name="" type="button" class="taobao_submit" value="">
            </form>
        </div>
        <div class="taobao_liucheng"><img src="src/assets/images/taobao_liucheng.png"></div>
        
        <returntop></returntop>
        <slot></slot>
        
        </div>
  </div>
</template>
<script>
import returntop from "./returntop.vue";
export default {
  components: {
    returntop
  }
};
</script>
<style>
@import "../assets/css/index.css";
</style>