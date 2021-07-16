import { createStore } from "vuex";
import * as http from "../services/http";

export default createStore({
  state: {
    videosList: [],
    videosIds: "",
    isFetching: false,
    searchTerm: "spongebob",
    pageToken: "",
    channelId: "",
    videoId: "",
    searchType: ''
  },
  mutations: {
    setVideosIds: function (state, payload) {
      state.videosIds = payload;
    },
    setVideosList: function (state, { payload, isPaging }) {
      if (!isPaging) {
        state.videosList = payload;
      } else {
        state.videosList.push(...payload);
        // window.scrollTo(0, document.body.scrollHeight);
      }
    },
    updateSearchTerm: function (state, payload) {
      state.searchTerm = payload;
    },
    setChannelId(state, payload) {
      state.channelId = payload
    },
    setCurrentVideoId(){

    }
  },
  actions: {
    getVideos: function (context, { isPaging, currentRoute }) {
      context.state.isFetching = true;
      console.log(context)

      http
        .getVideosIds(
          context.state.searchTerm,
          context.state.pageToken,
         currentRoute
        )
        .then((res) => {
          const ids = res.data.items.map((video) => video.id.videoId);
          context.state.pageToken = res.data.nextPageToken;
          context.commit("setVideosIds", ids.join(""));

          http.getVideoList(ids.join(",")).then((result) => {
            context.commit("setVideosList", {
              payload: result.data.items,
              isPaging,
            });
            context.state.isFetching = false;
          });
        });
    },
  },
  modules: {},
});
