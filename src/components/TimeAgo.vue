<template>
  {{ timeAgo }}
</template>

<script>
import moment from 'moment'

export default {
  props: ['time'],
  data () {
    return {
      timeAgo: moment(time).fromNow()
    }
  }
}
</script>

<style lang="css">
</style>
