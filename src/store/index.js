import { createStore } from "vuex";
import * as http from "../services/auth";

export default createStore({
  state: {
    videosList: [],
    videosIds: "",
    isFetching: false,
    searchTerm: "spongebob",
    pageToken: "",
    channelId: ""
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
    setChannelId(state, payload){
      state.channelId = payload
    }
  },
  actions: {
    getVideos: function (context, { isPaging}) {
      context.state.isFetching = true;

      http
        .getVideosIds(
          context.state.searchTerm,
          context.state.pageToken,
          context.state.channelId
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
