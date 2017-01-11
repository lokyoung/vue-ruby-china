<template>
  <div>
    <div class="col-md-9">
      <div class="panel panel-default vr-panel">
        <div class="panel-body item-list">
          <topic v-for="topic in topics" v-bind:topic="topic"></topic>
        </div>
        <div class="panel-footer">
          <paginator :pageCount="20" :clickHandler="clickHandler"></paginator>
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
import Paginator from './Paginator'
import api from '../api'

export default {
  components: {
    Topic,
    Resources,
    Paginator
  },
  data () {
    return {
      topics: []
    }
  },
  created () {
    api.getTopics().then(topics => {
      this.topics = topics
    })
  },
  methods: {
    clickHandler (pageNum) {
      api.getTopics({offset: (pageNum - 1) * 20}).then(topics => {
        this.topics = topics
      })
    }
  }
}
</script>
