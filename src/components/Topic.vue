<template>
  <div class="topic media">
    <div class="avatar media-left">
      <img v-bind:src="topic.user.avatar_url" />
    </div>
    <div class="infos media-body">
      <div class="title media-heading">
        <span class="node">{{ topic.node_name }}</span>
        <router-link :to="{name: 'topic', params: {id: topic.id}}">
          {{ topic.title }}
        </router-link>
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
          <abbr>{{ topic.replied_at | timeAgo }}</abbr>
        </span>
        <span v-else>
          • Created at
          <abbr>{{ topic.created_at | timeAgo }}</abbr>
        </span>
      </div>
    </div>
    <div class="count media-right">
      <a class="">{{ topic.replies_count }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['topic']
}
</script>
