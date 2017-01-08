<template>
  <div>
    <div class="col-md-9">
      <div class="panel panel-default vr-panel">
        <div class="panel-body item-list">
          <topic v-for="topic in topics" v-bind:topic="topic"></topic>
        </div>
        <div class="panel-footer">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
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
