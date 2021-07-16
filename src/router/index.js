import { createRouter, createWebHashHistory } from "vue-router";
import Result from "../views/Results.vue";
import Channel from "../views/Channel.vue";

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
