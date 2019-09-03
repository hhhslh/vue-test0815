<template>
    <div>
        {{$store.state.count}}
        <button @click="add(5)">+</button>
        <button @click="reduce(10)">-</button>
        <button @click="yadd(15)">异步+</button>
        <button @click="yreduce(20)">异步-</button>
        <router-link to="/hi">跳子</router-link>
        <hi :message="parentMsg.total" @sendMsgtoParent="msgFromChild"></hi>
    </div>
</template>

<script>
import hi from "./hi"
import {getSchool} from "../api/api"
export default {
    components:{
        hi
    },
  data () {
    return {
        parentMsg:"",
        points:0,
        bet:{
            pointsec:50,
            pointHisytoy:"local"
        }
    }
  },
  computed: {
      pointHisytoy(){
          return this.bet.pointHisytoy
      }
  },
  watch:{
      points(newValue,index){
          console.log(newValue+"---"+index)
      },
      bet:{
          handler(s,index){
              console.log(s+"---"+index)
          },
          deep:true
      }
  },
  methods: {
    //   子传父
      msgFromChild(child){
          console.log(child)
      },
     apiTest(){
         getSchool({
            pageNum: 1,
            pageSize: 24
         }).then(res=>{
            this.parentMsg=res.data
         })
     },
     add(n){
         this.points++
         this.$store.commit('mutationsAddCount',n);
     },
     reduce(n){
          this.$store.commit('mutationsReduceCount',n);
     },
     yadd(n){
         this.bet.pointsec++
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
