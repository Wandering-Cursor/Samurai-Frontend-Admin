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
        children: [
          {
            path: "",
            component: () => import("@/pages/main/accounts/Accounts.vue"),
          },
          {
            path: "create",
            component: () => import("@/pages/main/accounts/AccountCreate.vue"),
          },
          {
            path: ":id",
            component: () => import("@/pages/main/accounts/Account.vue"),
          },
        ],
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
