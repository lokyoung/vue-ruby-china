<template>
  <div v-if="reply.body_html" class="reply">
    <div class="avatar">
      <img :src="reply.user.avatar_url"/>
    </div>
    <div class="infos">
      <div class="info">
        <span class="name">{{ reply.user.login }}</span>
        • <abbr>{{ reply.created_at | timeAgo }}</abbr>
      </div>
      <div class="markdown">
        <span v-html="reply.body_html"></span>
      </div>
    </div>
  </div>
  <div v-else class="reply reply-system">
    <a><img class="avatar-system" :src="reply.user.avatar_url"/></a>
    <span class="name">{{ reply.user.login }}</span>
    • <abbr>{{ reply.created_at | timeAgo }}</abbr>
  </div>
</template>

<script>
export default {
  props: ['reply']
}
</script>

<style lang="scss">
.reply {
  margin: 0 -15px;
  padding: 15px 15px;
  position: relative;
  border-bottom: 1px solid #eee;
  padding-left: 74px;

  .avatar {
    position: absolute;
    top: 15px;
    left: 15px;
  }

  .info {
    margin-bottom: 6px;
    font-size: 12px;
  }

  .name {
    font-weight: bold;
    font-size: 13px;
    color: #555;
  }

  abbr {
    color: #999;
  }
}

.reply-system {
  border-bottom: 1px solid #eee;
  padding: 8px 15px;
  font-size: 12px;

  .avatar-system {
    border-radius: 125px;
    width: 16px;
    height: 16px;
  }

  .info {
    margin-left: 5px;
  }
}
</style>
