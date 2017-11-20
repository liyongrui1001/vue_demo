<template>
  
    <Loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" >
      <div class="mall_list">
          <a href="javascript:;"  v-for="(item,index) in malllist" :key="item.id" class="list_mall">
            <div class="mall_logo">
              <img :src="item.src" />
            </div>
            <span>最高返 <i>{{item.zhe}}</i></span>
          </a>
          
          
    </div>
    </Loadmore>
  
  
</template>

<script>
import { Loadmore } from "mint-ui";

export default {
  data() {
    return {
      malllist: [],
      allLoaded: false
    };
  },
  components: {
    Loadmore
  },
  mounted() {
    this.axios({
      url: "http://localhost:3000/malllist",
      method: "get"
    })
      .then(res => {
        this.malllist = res.data;
        this.allLoaded = false;
        // this.loadBottom()
      })
      .catch(res => {
        console.log(res);
      });
  },
  methods: {
    loadTop() {
      this.axios({
        url: "http://localhost:3000/malllist",
        method: "get"
      })
        .then(res => {
          this.malllist = res.data;
          this.allLoaded = false;
        })
        .catch(res => {
          console.log(res);
        });
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      this.axios({
        url: "http://localhost:3000/malllist",
        method: "get"
      })
        .then(res => {
          this.malllist = this.malllist.concat(res.data);
          this.allLoaded = false;
        })
        .catch(res => {
          console.log(res);
        });
      this.allLoaded = true;
      this.$refs.loadmore.onBottomLoaded();
    }
  }
};
</script>
<style>
@import "../assets/css/index.css";
</style>
