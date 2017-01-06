<template>
  <div class="topic media">
    <div class="avatar media-left">
      <img v-bind:src="topic.user.avatar_url" />
    </div>
    <div class="infos media-body">
      <div class="title media-heading">
        <span class="node">{{ topic.node_name }}</span>
        <a :href="'/topics/' + topic.id">
          {{ topic.title }}
        </a>
        <span v-if="topic.excellent === 1">
          <i class="glyphicon glyphicon-star-empty" style="color: #EB5424;"></i>
        </span>
      </div>
      <div class="info">
        <a>{{ topic.user.login }}</a>
        <span v-if="topic.last_reply_user_login">
          • Last by
          <a>{{ topic.last_reply_user_login }}</a>
          replied at
          <abbr>{{ timeAgo(topic.replied_at) }}</abbr>
        </span>
        <span v-else>
          • Created at
          <abbr>{{ timeAgo(topic.created_at) }}</abbr>
        </span>
      </div>
    </div>
    <div class="count media-right">
      <a class="">{{ topic.replies_count }}</a>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['topic'],
  methods: {
    timeAgo: function (time) {
      return moment(time).fromNow()
    }
  }
}
</script>
