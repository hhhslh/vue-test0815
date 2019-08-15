<template>
    <div>
        {{$store.state.count}}
        <button @click="add(5)">+</button>
        <button @click="reduce(10)">-</button>
        <button @click="yadd(15)">异步+</button>
        <button @click="yreduce(20)">异步-</button>
        <router-link to="/hi">跳hi</router-link>
    </div>
</template>

<script>
import {getSchool} from "../api/api"
export default {
  data () {
    return {
     
    }
  },
  methods: {
     apiTest(){
         getSchool({
            pageNum: 1,
            pageSize: 24
         }).then(res=>{
             console.log(res)
         })
     },
     add(n){
         this.$store.commit('mutationsAddCount',n);
     },
     reduce(n){
          this.$store.commit('mutationsReduceCount',n);
     },
     yadd(n){
         this.$store.dispatch('actionsAddCount',n)
     },
     yreduce(n){
          this.$store.dispatch('actionsReduceCount',n)
     }
  },
  mounted(){
      this.apiTest()
  }
}
</script>

<style scoped>

</style>
