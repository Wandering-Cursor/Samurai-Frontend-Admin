import { createRouter } from "vue-router";
import { RouterHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/main/MainWithAuthentication.vue"),
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
          {
            path: ":id/connections",
            component: () =>
              import("@/pages/main/accounts/AccountConnections.vue"),
          },
        ],
      },
      {
        path: "/:pathMatch(.*)*",
        component: () => import("@/pages/main/NotFound.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/pages/login/Login.vue"),
  },
];

export default function (history: RouterHistory) {
  return createRouter({
    history,
    routes,
  });
}
