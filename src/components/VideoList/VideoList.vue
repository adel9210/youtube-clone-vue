<template>
  <video-card
    :video="video"
    v-for="video in videosItems"
    :key="video.id.videoId"
  ></video-card>
</template>

<script>
import VideoCard from "../VideoCard/VideoCard.vue";

export default {
  name: "videoList",
  components: { VideoCard },
  props: ['videosItems']
};
</script>

<style>
</style>