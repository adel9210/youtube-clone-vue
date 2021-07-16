<template>
  <div class="result" id="result">
    <div class="container">
      <template v-if="!isFetching">
        <!-- <div class="result__filter">
          <h3 class="result__filter__total-result">About 120000002 Results</h3>
          <a href="#" class="result__filter__link">
            <i class="fa fa-filter"></i> Filter
          </a>
        </div> -->
        <video-list :videosItems="videosItems" />
      </template>
    </div>
  </div>
</template>

<script>
import VideoList from "../components/VideoList/VideoList.vue";

export default {
  name: "Results",
  components: { VideoList },
  data: function () {
    return {
      ids: [],
      videos: [],
    };
  },
  mounted() {
    this.$store.commit('setChannelId', '');
    this.$store.dispatch("getVideos", { isPaging: false });
  },
  computed: {
    videosItems: function () {
      return this.$store.state.videosList;
    },
    isFetching: function () {
      return this.$store.state.isFetching;
    },
  },
};
</script>

<style lang="scss" scopped>
.result {
  background-color: #fafafa;
  padding: 20px 0;

  &__filter {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__total-result {
      font-size: 1rem;
    }

    &__link {
      text-decoration: none;
      color: grey;
    }
  }
}
</style>
