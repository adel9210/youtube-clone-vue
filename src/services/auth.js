/* eslint-disable */
import axios from "axios";
const CLIENT_ID =
  "128876489745-jmssg06m6tdlk0d5ae4fj98srr6o8lsf.apps.googleusercontent.com";
const APIKEY = "AIzaSyC4gKvfVBYQ-Xejg8t46zjsKE3kMTHhQX0";

// const CLIENT_ID_2 = '451425765025-6m6mnebsuhp7uk3fmlvin2a7u9totjk8.apps.googleusercontent.com'
const APIKEY2 = "AIzaSyDroIcnKooHkw00meqCvx1Px5HX-CZ9Wpc";

const http = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: APIKEY,
    maxResults: 5,
    type: "video",
  },
});

// http.interceptors.request.use((config)=>{
//     return config
// })

function getVideosIds(searchTerm, nextPageToken = "", channelId = "") {
  let url = `/search?q=${searchTerm}&part=snippet&pageToken=${nextPageToken}`;

  if (!!channelId) {
    url = `/search/?part=snippet&pageToken=${nextPageToken}${
      channelId && "&channelId=" + channelId
    }`;
  }
  return http.get(url);
}

function getVideoList(ids) {
  const url = `/videos?part=snippet,contentDetails,statistics&id=${ids}`;
  return http.get(url);
}

export { getVideosIds, getVideoList };
