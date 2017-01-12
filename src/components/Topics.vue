<template>
  <div>
    <div class="col-md-9">
      <div class="panel panel-default vr-panel">
        <div class="panel-body item-list">
          <topic v-for="topic in topics" v-bind:topic="topic"></topic>
        </div>
        <div class="panel-footer">
          <paginate
            :pageCount="20"
            :clickHandler="clickHandler"
            :prevText="'上一页'"
            :nextText="'下一页'"
            :containerClass="'pagination'"
            >
          </paginate>
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
import api from '../api'

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
