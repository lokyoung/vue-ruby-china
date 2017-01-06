<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <ul class="nav navbar-nav">
        <li class="rc-navbar-brand"><router-link :to="{name: 'index'}"><b>Ruby</b> China</router-link></li>
        <li><router-link :to="{name: 'topics'}">社区</router-link></li>
        <li><a>Wiki</a></li>
        <li><a>酷站</a></li>
        <li><a>Homeland</a></li>
        <li><a>Jobs</a></li>
        <li><a href="https://gems.ruby-china.org/">Gems</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.rc-navbar-brand b{
  color: #EB5424;
}
</style>
