import { createRouter } from "vue-router";
import { createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    component: () => import("@/pages/Login/LoginPage.vue"),
  },
  {
    path: "/",
    component: () => import("@/pages/Main/MainWithAuthentication.vue"),
    children: [
      {
        path: "",
        component: () => import("@/pages/Main/BlankPage.vue"),
      },
      {
        path: "accounts",
        children: [
          {
            path: "",
            component: () => import("@/pages/Main/Accounts/AccountsPage.vue"),
          },
          {
            path: "create",
            component: () => import("@/pages/Main/Accounts/AccountCreate.vue"),
          },
          {
            path: ":id",
            component: () => import("@/pages/Main/Accounts/AccountPage.vue"),
          },
          {
            path: ":id/connections",
            component: () =>
              import("@/pages/Main/Accounts/AccountConnections.vue"),
          },
          {
            path: ":id/permissions",
            component: () =>
              import("@/pages/Main/Accounts/AccountPermissions.vue"),
          },
        ],
      },
      {
        path: "organization",
        children: [
          {
            path: "",
            component: () =>
              import("@/pages/Main/Organization/OrganizationMain.vue"),
          },
          {
            path: "faculty",
            children: [
              {
                path: "",
                component: () =>
                  import("@/pages/Main/Organization/Faculty/FacultyList.vue"),
              },
              {
                path: "create",
                component: () =>
                  import("@/pages/Main/Organization/Faculty/FacultyCreate.vue"),
              },
              {
                path: ":id",
                component: () =>
                  import("@/pages/Main/Organization/Faculty/FacultyView.vue"),
              },
              {
                path: ":id/edit",
                component: () =>
                  import("@/pages/Main/Organization/Faculty/FacultyEdit.vue"),
              },
            ],
          },
        ],
      },
      {
        path: "/:pathMatch(.*)*",
        component: () => import("@/pages/Main/NotFound.vue"),
      },
    ],
  },
];

export default function () {
  return createRouter({
    history: createWebHashHistory(),
    routes: routes,
  });
}
