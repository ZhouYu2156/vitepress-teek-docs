<script setup lang="ts" name="NoticeContent">
const namespace = "notice";
</script>

<template>
  <div :class="namespace">
    <p>微信 👇</p>
    <img src="/social-icons/wechat.png" alt="QR Code" />
    <p class="">有任何事情可以添加本人微信留言~</p>
  </div>
</template>

<style lang="scss" scoped>
.notice {
  img {
    width: 100%;
    height: 120px;
    object-fit: contain;
  }

  p {
    text-align: center;
    font-size: 14px;
    padding: 10px 0;
  }
}
</style>
