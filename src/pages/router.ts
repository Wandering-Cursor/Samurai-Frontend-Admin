import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    component: () => import("@/pages/login/LoginPage.vue"),
  },
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
          {
            path: ":id/permissions",
            component: () =>
              import("@/pages/main/accounts/AccountPermissions.vue"),
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
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

export default function () {
  return createRouter({
    history: createWebHistory(),
    routes: routes,
  });
}
