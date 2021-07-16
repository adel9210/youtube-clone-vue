import { createRouter, createWebHashHistory } from "vue-router";
import Result from "../views/Results.vue";
import Channel from "../views/Channel.vue";
import Watch from "../views/Watch.vue";

const routes = [
  {
    path: "/",
    name: "Result",
    component: Result,
  },
  {
    path: "/channel/:channelId",
    name: "channel",
    component: Channel,
  },
  {
    path: "/watch/:videoId",
    name: "watch",
    component: Watch,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
