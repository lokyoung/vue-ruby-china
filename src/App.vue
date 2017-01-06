<template>
  <div class="page" id="app">
    <navbar></navbar>
    <div class="container">
      <announce></announce>
      <excellent></excellent>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Announce from './components/Announce'
import Excellent from './components/Excellent'

export default {
  name: 'app',
  components: {
    Navbar,
    Announce,
    Excellent
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
