<template>
  <div class="container">
    <video-list :videosItems="videosItems" />
  </div>
</template>

<script>
import VideoList from "../components/VideoList/VideoList.vue";
export default {
  components: {
    VideoList,
  },
  data() {
    return {
      channelId: "",
    };
  },
  computed: {
    videosItems: function () {
      return this.$store.state.videosList;
    },
    isFetching: function () {
      return this.$store.state.isFetching;
    },
  },
  mounted() {
    this.channelId = this.$route.params.channelId;
    this.$store.commit("setChannelId", this.channelId);

    this.$store.dispatch("getVideos", {
      isPaging: false,
      currentRoute: this.$route,
    });
  },
};
</script>

<style>
</style>