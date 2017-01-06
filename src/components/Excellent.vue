<template>
  <div class="panel panel-default excellent-topics">
    <div class="panel-heading">
      社区精华帖
    </div>
    <div class="panel-body topics row">
      <div class="col-md-6">
        <Topic v-for="topic in oddTopics" v-bind:topic="topic"></Topic>
      </div>
      <div class="col-md-6">
        <Topic v-for="topic in evenTopics" v-bind:topic="topic"></Topic>
      </div>
    </body>
  </div>
</template>

<script>
import Topic from './Topic'

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
  created: function () {
    this.initData().then(topics => {
      this.oddTopics = topics.filter((v, i) => i % 2)
      this.evenTopics = topics.filter((v, i) => !(i % 2))
    })
  },
  methods: {
    initData: function () {
      return this.$http.get('topics/', { params: { type: 'excellent' }, headers: { Accept: 'application/json' } })
        .then(res => {
          return res.body.topics
        }, error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss">
  .excellent-topics {
    text-align: left;

    .panel-heading {
      background: #fafafa;
      padding: 6px 15px;
      border-bottom-color: #eee;
      color: #777;
    }
  }

</style>
