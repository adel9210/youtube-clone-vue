<template>
  <div class="container">
    <iframe
      class="watch__iframe"
      width="100%"
      height="500"
      v-bind:src="'https://www.youtube.com/embed/' + videoId"
    >
    </iframe>
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
      videoId: "",
    };
  },
  computed: {
    videosItems: function () {
      return this.$store.state.videosList;
    },
    isFetching: function () {
      return this.$store.state.isFetching;
    },
    currentId: function () {
      return this.videoId;
    },
  },
  mounted() {
    this.videoId = this.$route.params.videoId;
    // window.screenTop();

    this.$store.dispatch("getVideos", {
      isPaging: false,
      currentRoute: this.$route,
    });
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      this.videoId = to.params.videoId;
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
.watch__iframe {
  margin: 40px 0;

  @media screen and (max-width: 768px){
      height: 300px;
      margin-top: 20px;
  }
}
</style>