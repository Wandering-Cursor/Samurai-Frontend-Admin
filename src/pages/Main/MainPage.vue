<script setup lang="ts">
import SidePanel from "@/components/SidePanel/SidePanel.vue";
import { useHead } from "@unhead/vue";
import { ref } from "vue";

useHead({
  title: "Main Page",
  meta: [
    { property: "og:title", content: "Main Page" },
    { property: "og:description", content: "Main page of the admin" },
  ],
});

const isSideMenuVisible = ref(true);
</script>

<template>
  <Sidebar v-model:visible="isSideMenuVisible">
    <template #container>
      <SidePanel />
    </template>
  </Sidebar>
  <Button
    @click="isSideMenuVisible = !isSideMenuVisible"
    class="absolute top-0 left-0 p-button-secondary"
    icon="pi pi-bars"
  />
  <router-view />
</template>
