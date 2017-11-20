<template>
  <div id="app">
    <loading v-show="bLoading"></loading>
    <router-view></router-view>
     <foot></foot>
  </div>
</template>

<script>

import foot from "./components/foot.vue";
import {mapGetters} from "vuex";
export default {
  name: 'app',
  components:{
    foot
  },
  computed:mapGetters([
    "bLoading"
  ])
}
</script>

<style>
  
</style>

