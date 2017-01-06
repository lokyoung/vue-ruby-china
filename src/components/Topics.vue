<template>
  <div>
    <div class="col-md-9">
      <div class="panel panel-default vr-panel">
        <div class="panel-body item-list">
          <topic v-for="topic in topics" v-bind:topic="topic"></topic>
        </div>
      </div>
    </div>
    <div class="sidebar col-md-3">
      <resources></resources>
    </div>
  </div>
</template>

<script>
import Topic from './Topic'
import Resources from './Resources'

export default {
  components: {
    Topic,
    Resources
  },
  data () {
    return {
      topics: []
    }
  },
  created () {
    this.initData().then(topics => {
      this.topics = topics
    })
  },
  methods: {
    initData () {
      return this.$http.get('topics/', { headers: { Accept: 'application/json' } })
        .then(res => {
          return res.body.topics
        }, err => {
          return err
        })
    }
  }
}
</script>
