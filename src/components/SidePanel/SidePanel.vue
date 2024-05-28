<script setup lang="ts">
import Divider from "primevue/divider";
import { ref } from "vue";
import AppHeader from "@/components/SidePanel/AppHeader.vue";
import SidePanelRouterLink from "./SidePanelRouterLink.vue";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

const items = ref([
  {
    label: "sideMenu.topics.home",
    items: [
      {
        label: "sideMenu.homeSubTopics.home",
        icon: "pi pi-home",
        route: "/",
      },
    ],
  },
  {
    label: "sideMenu.topics.accounts",
    items: [
      {
        label: "sideMenu.accountsSubTopics.accounts",
        icon: "pi pi-user",
        route: "/accounts",
      },
    ],
  },
  {
    label: "sideMenu.topics.organization",
    items: [
      {
        label: "sideMenu.organizationSubTopics.departments",
        icon: "pi pi-building",
        route: "/organization/department",
      },
      {
        label: "sideMenu.organizationSubTopics.faculties",
        icon: "pi pi-building-columns",
        route: "/organization/faculty",
      },
      {
        label: "sideMenu.organizationSubTopics.groups",
        icon: "pi pi-users",
        route: "/organization/group",
      },
    ],
  },
  {
    label: "sideMenu.topics.projects",
    items: [
      {
        label: "sideMenu.projectsSubTopics.projects",
        icon: "pi pi-folder-open",
        route: "/projects",
      },
    ],
  },
  {
    label: "sideMenu.topics.miscellaneous",
    items: [
      {
        label: "sideMenu.miscellaneousSubTopics.importAccounts",
        icon: "pi pi-upload",
        route: "/batch/accounts",
      },
      {
        label: "sideMenu.miscellaneousSubTopics.importProjects",
        icon: "pi pi-upload",
        route: "/batch/projects",
      },
    ],
  },
]);

const languageOptions = ref([
  { name: "English", value: "en", flag: "us" },
  { name: "Українська", value: "ua", flag: "ua" },
]);

const setLocaleTo = (locale: string) => {
  localStorage.setItem("locale", locale);
};

const getCountryLabel = (option: { name: string; flag: string }) => {
  return `${getUnicodeFlagIcon(option.flag)} ${option.name}`;
};
</script>

<template>
  <div class="card flex justify-content-center w-full">
    <Menu :model="items" class="flex-grow-1">
      <template #start>
        <AppHeader />
        <Divider />
      </template>
      <template #submenuheader="{ item }">
        <span>{{ $t(item.label as string) }}</span>
      </template>
      <template #item="{ item, props }">
        <SidePanelRouterLink :item="item" :props="props" />
      </template>
      <template #end>
        <Divider />
        <div class="flex gap-4 flex-column">
          <div class="flex justify-content-center">
            <a href="https://github.com/Wandering-Cursor/">
              <Button
                link
                label="By Wandering-Cursor team"
                class="font-medium text-xs font-light p-0 m-0"
              />
            </a>
          </div>
          <div class="flex flex-column">
            <div class="flex justify-content-center">
              <p>{{ $t("message.chooseLanguage") }}</p>
            </div>
            <SelectButton
              v-model="$i18n.locale"
              :options="languageOptions"
              :optionLabel="getCountryLabel"
              optionValue="value"
              v-on:update:modelValue="setLocaleTo"
              v-on:change="(event) => setLocaleTo(event.value)"
              class="flex justify-content-center"
              :allowEmpty="false"
            />
          </div>
        </div>
      </template>
    </Menu>
  </div>
</template>
