import { createRouter } from "vue-router";
import { RouterHistory } from "vue-router";
import Login from "./login/Login.vue";
import MainWithAuthentication from "./main/MainWithAuthentication.vue";

const routes = [
  {
    path: "/",
    component: MainWithAuthentication,
  },
  {
    path: "/login",
    component: Login,
  },
];

export default function (history: RouterHistory) {
  return createRouter({
    history,
    routes,
  });
}
