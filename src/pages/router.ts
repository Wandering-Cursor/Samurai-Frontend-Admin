import { createRouter } from "vue-router";
import { RouterHistory } from "vue-router";
import Login from "./login/Login.vue";
import MainWithAuthentication from "./main/MainWithAuthentication.vue";

const routes = [
  {
    path: "/",
    component: MainWithAuthentication,
    children: [
      {
        path: "",
        component: () => import("@/pages/main/blank/Blank.vue"),
      },
      {
        path: "accounts",
        component: () => import("@/pages/main/accounts/Accounts.vue"),
      },
    ],
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
