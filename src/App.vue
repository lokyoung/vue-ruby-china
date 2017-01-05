<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Hello,
    Navbar
  }
}
</script>

<style lang="sass">
  @import './vendor/bootstrap.css'
  @import './assets/stylesheets/app.scss'
</style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
