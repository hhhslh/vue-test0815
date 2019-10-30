<template>
  <div id="app">
    <p>导航 ：
        <router-link to="/">indexPage页面</router-link> |
        <router-link :to="{name:'hi1',params:{username:'slh',id:'666'}}">Hi页面1</router-link> |
        <router-link to="hi2/10001/新闻标题">Hi页面2</router-link>
         <router-link to="/">goIndex</router-link>
         <router-link to="/goHi2/10009/hi2新闻标题">goHi2</router-link>
    </p>
    <p>{{ $route.name}}</p>
    <router-view></router-view>
    <router-view name="left"></router-view>
    <router-view name="right"></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'App'
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
</style>
