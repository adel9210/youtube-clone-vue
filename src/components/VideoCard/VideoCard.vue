<template>
  <div class="video-card">
    <img
      @click="goTo('watch', { videoId: video.id })"
      class="video-card__image"
      v-bind:src="video.snippet.thumbnails.medium.url"
      alt="Video"
    />
    <div class="video-card__info">
      <a
        class="video-card__info__title"
        @click="goTo('watch', { videoId: video.id })"
        >{{ video.snippet.title }}</a
      >
      <h3 class="video-card__info__video">
        <span
          @click="goTo('channel', { channelId: video.snippet.channelId })"
          class="video-card__info__video__channel-name"
          ><b>{{ video.snippet.channelTitle }} </b></span
        >
        <span class="video-card__info__video__views">
          {{ formatViewsNumber(video.statistics.viewCount) }} Views
        </span>
        <span class="video-card__info__video__posted">{{
          video.snippet.publishedAt
        }}</span>
      </h3>
      <p
        v-bind:title="video.snippet.description"
        class="video-card__info__description"
        @click="goTo('watch', { videoId: video.id })"
      >
        {{ video.snippet.description.slice(0, 150) + "..." }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: Object,
  },
  methods: {
    goTo: function (name, params) {
      this.$router.push({ name, params: params });
    },
    redirect: function (url) {
      window.open(url);
    },
    formatViewsNumber(number) {
      if (number < 1000) {
        return number;
      } else if (number >= 1000) {
        return Math.floor(number / 1000).toFixed(0) + " k";
      } else if (number >= 1000000) {
        return Math.floor(number / 1000000).toFixed(0) + " M";
      }
    },
  }
};
</script>

<style lang="scss" scopped>
@import "./VideoCard.scss";
</style>
