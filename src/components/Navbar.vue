<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <ul class="nav navbar-nav">
        <li class="rc-navbar-brand"><a><b>Ruby</b> China</a></li>
        <li><a>社区</a></li>
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
  name: 'navbar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.uk-navbar {
  background-color: #FFF;
  box-shadow: 0 1px 1px rgba(0,0,0,0.05);
}

.rc-navbar-brand b{
  color: #EB5424;
}
</style>
