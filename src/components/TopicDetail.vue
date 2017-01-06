<template>
  <div>
    <div class="col-md-9">
      <div v-if="!isLoading" class="panel panel-default topic-detail">
        <div class="panel-heading media">
          <div class="media-body">
            <h1 class="media-heading">
              <a href="">{{ topic.node_name }}</a>
              {{ topic.title }}
            </h1>
            <div class="info">
              <a class="user-name" href="">{{ topic.user.login }}</a>
              • Created at
              <abbr>{{ timeAgo(topic.created_at) }}</abbr>
              <span v-if="topic.last_reply_user_login">
                • Last by
                <a>{{ topic.last_reply_user_login }}</a>
                replied at
                <abbr>{{ timeAgo(topic.replied_at) }}</abbr>
              </span>
            </div>
          </div>
          <div class="avatar media-right">
            <a href="">
              <img v-bind:src="topic.user.avatar_url">
            </a>
          </div>
        </div>
        <div class="panel-body markdown">
          <span v-html="topic.body_html"></span>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <resources></resources>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Resources from './Resources'

export default {
  components: {
    Resources
  },
  data () {
    return {
      topic: null,
      isLoading: true
    }
  },
  created () {
    this.initData().then(topic => {
      this.topic = topic
      this.isLoading = false
    })
  },
  methods: {
    initData () {
      return this.$http.get(`topics/${this.$route.params.id}`, { headers: { Accept: 'application/json' } })
        .then(res => {
          return res.body.topic
        }, err => {
          return err
        })
    },
    timeAgo: function (time) {
      return moment(time).fromNow()
    }
  }
}
</script>

<style lang="scss">
.topic-detail {
  text-align: left;

  .panel-heading {
    background: #fafafa;
    border-bottom-color: #eee;
    color: #777;

    h1 {
      margin-top: 0;
      font-size: 20px;
      color: #333;
      line-height: 150%;
      margin-bottom: 8px;
    }

    a {
      text-decoration: none;
      color: #222;
      font-weight: 400;
      line-height: 30px;
    }
  }

  .info {
    color: #c0c0c0;
    font-size: 12px;

    .user-name {
      color: #356DD0;
      font-size: 13px;
    }
  }
}
</style>
