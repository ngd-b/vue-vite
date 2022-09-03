<template>
  <div class="reply-detail">
    <a class="author" :href="`/user/${data.author.loginname}`">
      <img :src="data.author.avatar_url" />
    </a>
    <div class="info">
      <div>
        <span>{{ data.author.loginname }}</span>
        <span>{{ data.create_at }}</span>
      </div>
      <div>
        <div v-html="data.content"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({
        author: {},
      }),
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.reply-detail {
  display: flex;
  padding: 10px;
  .author {
    flex-basis: 30px;
    margin-right: 10px;
    img {
      border-radius: 3px;
    }
  }
  .info {
    div {
      &:first-child {
        margin-bottom: 10px;
        color: #385f8a;
      }
      &:last-child {
        margin-left: 8px;
      }
    }
  }
}
</style>