<template>
<div class="echars">
    <div class="mobile">
        <header>
            <div class="header"> <a class="new-a-back" href="javascript:history.back();"> <span><img src="src/assets/images/iconfont-fanhui.png"></span> </a>
            <h2>个人消费情况</h2>
            <div class="header_right shaixuan"><router-link to="/index"><img src="src/assets/images/iconfont-shouye.png"></router-link></div>
            </div>
        </header>
    <div id="myChart" :style="{width: '100%', height: '300px'}" ref="echarts"></div>
    <returntop></returntop>
        <slot></slot>
  </div>
</div>
</template>
<script>
    import echarts from '../assets/js/echarts.simple.min.js'
    import returntop from "./returntop.vue";
    
    export default {
      data() {
        return {
          msg: ''
        }
      },
      components:{
            returntop
        },
      mounted() {
        this.drawLine();
        // this.inits();
      },
      
      methods: {
        drawLine() {
          // 基于准备好的dom，初始化echarts实例
          let myChart = echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
            title : {
                text: '个人消费情况',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['食品','衣服','美妆','鞋包','电子产品']
            },
            series : [
                {
                    name: '消费情况',
                    type: 'pie',
                    roseType: 'angle',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'食品'},
                        {value:610, name:'衣服'},
                        {value:534, name:'美妆'},
                        {value:435, name:'鞋包'},
                        {value:548, name:'电子产品'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            // 阴影的大小
                            shadowBlur: 200,
                            // 阴影水平方向上的偏移
                            shadowOffsetX: 0,
                            // 阴影垂直方向上的偏移
                            shadowOffsetY: 0,
                            // 阴影颜色
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            label:{
                            show:true,
                            formatter: '{b} : {c} \n ({d}%)'
                            },
                            labelLine:{
                            show:true
                            }
                        }
                    }
                }
            ]
          });
        }
        // inits(){
        //     window.onresize=this.$refs.echarts.resize;
        // }
        // inits () {
        //     var that=this;
        //       window.onresize = function () {
        //         that.$refs.echarts.resize()
        //       }
        //   }
      }
    }
  
</script>