<template>
  <div class="panel panel-default vr-panel">
    <div class="panel-heading">
      社区精华帖
    </div>
    <div class="panel-body row">
      <div class="col-md-6">
        <topic v-for="topic in oddTopics" v-bind:topic="topic"></topic>
      </div>
      <div class="col-md-6">
        <topic v-for="topic in evenTopics" v-bind:topic="topic"></topic>
      </div>
    </div>
  </div>
</template>

<script>
import Topic from './Topic'
import api from '../api'

export default {
  components: {
    Topic
  },
  data () {
    return {
      oddTopics: [],
      evenTopics: []
    }
  },
  created () {
    api.getTopics({type: 'excellent'}).then(topics => {
      this.oddTopics = topics.filter((v, i) => i % 2)
      this.evenTopics = topics.filter((v, i) => !(i % 2))
    })
  }
}
</script>
