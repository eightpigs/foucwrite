<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
  // ,
  // created: function () {
  //   console.info('Hello')
  // }
}
</script>

<style>
.element::-webkit-scrollbar {display:none}
html,body{
  height:100%;
}
html,body,input,textarea,div{
  margin:0px;
  padding: 0px;
  background-color: #F9F9F5;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
}
</style>
