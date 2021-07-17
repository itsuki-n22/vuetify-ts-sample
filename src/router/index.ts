import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import routes from "./routes"
import { authorizeToken } from './guards' // 名前付き関数だから {}内で宣言

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach(authorizeToken)

export default router;
