<template>
  <div class="mall">
      <div class="mobile">
	 
  <!--header 开始-->
  <header>
    <div class="header"> <a class="new-a-back" href="javascript:history.back();"> <span><img src="src/assets/images/iconfont-fanhui.png"></span> </a>
      <h2>商城返利</h2>
      </div>
  </header>
  <!--header 结束-->
  <!-- <div class="search w">
  	<form action="" method="get">
    	<input name="" type="text" class="search_input" placeholder="请输入商城名称"><input name="" type="button" class="search_submit" value="搜索">
    </form>
  </div> -->
  <div class="m_mall w">
   
    <malllist></malllist>
    <slot></slot>
    <!-- <div class="m_more"><a href="javascript:;">加载更多</a></div> -->
  </div>
  
  <returntop></returntop>
        <slot></slot>
  
</div>
  </div>
</template>
<script>
    import returntop from "./returntop.vue";
    import malllist from "./malllist.vue";
   export default{
       components:{
            returntop,malllist
        } 
    }
</script>
<style>
    @import "../assets/css/index.css";
    .header{
        position: relative;
    }
</style>

