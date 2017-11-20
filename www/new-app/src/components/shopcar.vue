<template>
  <div class="shopcar">
      <div class="mobile">
        
        <!--header 开始-->
        <header>
          <div class="header"> <a class="new-a-back" href="javascript:window.history.go(-1);"> <span><img src="src/assets/images/iconfont-fanhui.png"></span> </a>
            <h2>购物车</h2>
            
          </div>
        </header>
        <!--header 结束-->
          

        <div class="baoliao w">
          <div class="ui-tab">
          
            <div class="ui-tab-content">
              
                <a href="javascript:;">
                    <div class="baoliao_content" v-for="(item,index) in buycar" :key="item.id" >
                        <router-link :to="'/baoliaoview/'+item.id" tag="div" class="bl_img"><img :src="'http://localhost:8080/'+item.src" /></router-link>
                        <div class="bl_right">
                            <div class="bl_title">{{item.title}}</div>
                            
                            <div class="bl_tag">
                                <div class="bl_price">{{Number(item.price) | currency }}</div>
                                <div class="bl_time">
                                    <input type="button" value="+" @click="jia(item.id)">
                                    {{item.count}}
                                    <input type="button" value="-" @click="jian(item.id)">
                                    <input type="button" value="删除" @click="del(item.id)">
                                </div>
                                
                            </div>
                        </div>
                    </div> 
                </a>
                  
            </div>
                <p><input type="button" value="清空购物车" @click="clear" /></p>
                <p>总价：{{cptSum | currency}}</p>
              <div class="bl_more"><a href="javascript:;">结算</a></div>
          </div>
        </div>
        
        <returntop></returntop>
        <slot></slot>
        
      </div>
  </div>
</template>
<script>
    import {mapActions,mapGetters} from "vuex";
    import returntop from "./returntop.vue";
    import { MessageBox } from 'mint-ui';
    export default{
        data(){
            return {
                bllist:[]
            }
        },
        components:{
            returntop
        },
        methods:{
            jia(id){
                this.axios({
                    url:"http://localhost:3000/jia",
                    method:"post",
                    data:{
                        gid:id
                    }
                }).then((res)=>{
                    // console.log(res);
                    if(!res.data.err){
                        this.bllist.count=res.data.count
                        this.$store.dispatch("changeItem",{id:id,num:1})
                    }
                }).catch((res)=>{
                    console.log(res);
                })
            },
            jian(id){
                this.axios({
                    url:"http://localhost:3000/jian",
                    method:"post",
                    data:{
                        gid:id
                    }
                }).then((res)=>{
                    if(!res.data.err){
                        this.bllist.count=res.data.count
                        this.$store.dispatch("changeItem",{id:id,num:-1})
                    }
                }).catch((res)=>{
                    console.log(res);
                })
            },
            del(id){
                MessageBox.confirm("确定要删除吗？", "提示").then(()=>{
                    this.axios({
                        url:"http://localhost:3000/del",
                        method:"post",
                        data:{
                            gid:id
                        }
                    }).then((res)=>{
                        if(!res.data.err){
                            this.$store.dispatch("removeItem",{id:id})
                        }
                    }).catch((res)=>{
                        console.log(res);
                    })
                },()=>{
                    return;
                })
                
            },
            clear(id){
                MessageBox.confirm("确定要清空购物车吗？", "提示").then(()=>{
                    this.axios({
                        url:"http://localhost:3000/clear",
                        method:"post"
                    }).then((res)=>{
                        if(!res.data.err){
                            this.$store.dispatch("clearBuycar")
                        }
                    }).catch((res)=>{
                        console.log(res);
                    })
                },()=>{
                    return;
                })
            }
            // ,
            // ...mapActions([
            //     'changeItem','removeItem','clearBuycar'
            // ])
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
            })
        },
        computed:{
            ...mapGetters([
                "buycar"
            ]),
            cptSum(){
                var result=0;
                this.buycar.forEach((item,index)=>{
                if(item.count<=0) item.count=0;
                result += item.price * item.count;
                });
                return result;
            }
        }
    }

</script>
<style>
  @import "../assets/css/baoliao.css";
  .bl_more{
      background: red;
  }
  .bl_more a{
      color:#fff;
      font-size: 20px;
  }
  .bl_ipt{
      width:20px;

  }
</style>