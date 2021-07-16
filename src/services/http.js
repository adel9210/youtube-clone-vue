/* eslint-disable */
import axios from "axios";

const APIKEY2 = "AIzaSyDroIcnKooHkw00meqCvx1Px5HX-CZ9Wpc";

const http = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    key: APIKEY2,
    maxResults: 5,
    type: "video",
  },
});

function getVideosIds(searchTerm, nextPageToken = "", currentRoute) {
  console.log(currentRoute);
  let url = `/search?q=${searchTerm}&part=snippet&pageToken=${nextPageToken}`;

  switch (currentRoute.name) {
    case "watch":
      url = `/search?q=${searchTerm}&part=snippet&pageToken=${nextPageToken}`;
      break;
    case "channel":
      url = `/search/?part=snippet${
        nextPageToken && "&pageToken=" + nextPageToken
      }&channelId=${currentRoute.params.channelId}`;
      break;
    default:
      break;
  }

  return http.get(url);
}

function getVideoList(ids) {
  const url = `/videos?part=snippet,contentDetails,statistics&id=${ids}`;
  return http.get(url);
}

export { getVideosIds, getVideoList };
