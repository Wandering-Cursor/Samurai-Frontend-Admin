import { createRouter } from "vue-router";
import { RouterHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/main/MainWithAuthentication.vue"),
    children: [
      {
        path: "",
        component: () => import("@/pages/main/blank/BlankPage.vue"),
      },
      {
        path: "accounts",
        children: [
          {
            path: "",
            component: () => import("@/pages/main/accounts/AccountsPage.vue"),
          },
          {
            path: "create",
            component: () => import("@/pages/main/accounts/AccountCreate.vue"),
          },
          {
            path: ":id",
            component: () => import("@/pages/main/accounts/AccountPage.vue"),
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
    component: () => import("@/pages/login/LoginPage.vue"),
  },
];

export default function (history: RouterHistory) {
  return createRouter({
    history,
    routes,
  });
}
