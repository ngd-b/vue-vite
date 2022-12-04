<template>
  <div class="video-box">
    <video class="video-js vjs-theme-city" :src="videoUrl" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        videoUrl:
          'https://open.ys7.com/v3/openlive/K73093076_1_2.m3u8?expire=1669797449&id=517740898214219776&t=977c5d067ee056d973af9020487ab2dad2b952c44f98f8e36c3d153ff9b8eb20&ev=100',
      }
    },
  }
</script>
