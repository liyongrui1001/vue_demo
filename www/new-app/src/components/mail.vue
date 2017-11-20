<template>
  <div class="mail">
      <div class="mobile">
            
        <!--header 开始-->
        <header>
            <div class="header"> <a class="new-a-back" href="javascript:history.back();"> <span><img src="src/assets/images/iconfont-fanhui.png"></span> </a>
            <h2>站内消息</h2>
            
            </div>
        </header>
        <!--header 结束-->
        
        <div class="msg w">
            <div class="msg_title"><h1>订单确认通知</h1><span>2017-10-27 11:11:40</span></div>
            <div class="msg_content">您好：您的订单9454080333已经确认！您好：您的订单9454080333已经确认！您好：您的订单9454080333已经确认！</div>
        </div>
        <div class="msg w">
            <div class="msg_title"><h1>订单确认通知</h1><span>2017-10-27 11:11:40</span></div>
            <div class="msg_content">您好：您的订单9454080333已经确认！</div>
        </div>
        <div class="msg w">
            <div class="msg_title"><h1>订单确认通知</h1><span>2017-10-27 11:11:40</span></div>
            <div class="msg_content">您好：您的订单9454080333已经确认！</div>
        </div>
        <div class="msg w">
            <div class="msg_title"><h1>订单确认通知</h1><span>2017-10-27 11:11:40</span></div>
            <div class="msg_content">您好：您的订单9454080333已经确认！</div>
        </div>
        <div class="msg w">
            <div class="msg_title"><h1>订单确认通知</h1><span>2017-10-27 11:11:40</span></div>
            <div class="msg_content">您好：您的订单9454080333已经确认！</div>
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
    @import "../assets/css/user.css";
</style>

