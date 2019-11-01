<template>
  <div id="app">
    <p>导航 ：
        <router-link to="/">indexPage页面</router-link> |
        <router-link :to="{name:'hi1',params:{username:'slh',id:'666'}}">Hi页面1</router-link> |
        <router-link to="hi2/10001/新闻标题">Hi页面2</router-link> |
        <router-link to="/">goIndex</router-link> |
        <router-link to="/goHi2/10009/hi2新闻标题">goHi2</router-link> |
        <router-link to="/gohi1">gohi1</router-link>
        <router-link to="/123456">404</router-link>
    </p>
    <p>{{ $route.name}}</p>
    <p @click="goback">后退</p>
    <p @click="goindex">回到首页</p>
    <transition-group name="fade" mode='out-in'>
        <router-view key="box1"></router-view>
        <router-view name="left" key="box2"></router-view>
        <router-view name="right" key="box3"></router-view>
    </transition-group>
  </div>
  
</template>

<script>
export default {
  name: 'App',
  data(){
      return{

      }
  },
  methods:{
      goback(){
          this.$router.go(-1)
      },
      goindex(){
          this.$router.push('/')
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    transition:opacity .5s;
}
.fade-leave{
    opacity:1;
}
.fade-leave-active{
    opacity:0;
    transition:opacity .5s;
}

</style>
