<template>
  <div class="page" id="app">
    <navbar></navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="sass">
  @import './assets/stylesheets/app.scss'
</style>

<style>
.container {
  width: 1070px;
}

#app {
  font-family: Helvetica, Arial, "PingFang SC", "Noto Sans", Roboto, "Microsoft Yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
