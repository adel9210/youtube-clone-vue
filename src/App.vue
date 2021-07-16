
<template>
  <Header />
  <div class="main">
    <router-view />
    <Spinner v-if="isFetching" />
    <button v-if="!isFetching" class="load-more-button" @click="loadMore()">
      Show more items
    </button>
  </div>
</template>

<script>
/* eslint-disable */

import Header from "./components/Header/Header.vue";
import Spinner from "./components/Spinner/Spinner.vue";

export default {
  components: { Header, Spinner },
  methods: {
    loadMore: function () {
      this.$store.dispatch("getVideos", {
        isPaging: true,
        channelId: this.$store.state.channelId,
      });
    },
  },
  computed: {
    isFetching: function () {
      return this.$store.state.isFetching;
    },
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main {
  padding-top: 100px;
}

.load-more-button {
  width: 100%;
  padding: 10px;
  background-color: #efefef;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
  display: block;
}
</style>
