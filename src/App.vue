<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 引入导航组件
import Header from './components/Header';
// 注册组件
export default {
  components:{
    "app-header":Header
  }
}
</script>

<style>
#app {}
</style>
