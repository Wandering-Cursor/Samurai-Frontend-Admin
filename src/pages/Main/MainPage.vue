<script setup lang="ts">
import SidePanel from "@/components/SidePanel/SidePanel.vue";
import { useHead } from "@unhead/vue";
import { onMounted, ref, watch } from "vue";

useHead({
  title: "Main Page",
  meta: [
    { property: "og:title", content: "Main Page" },
    { property: "og:description", content: "Main page of the admin" },
  ],
});

const isSideMenuVisible = ref(false);

watch(isSideMenuVisible, () => {
  setLocalStorage();
});

const setLocalStorage = () => {
  localStorage.setItem("isSideMenuVisible", isSideMenuVisible.value.toString());
};

onMounted(() => {
  localStorage.getItem("isSideMenuVisible") === "false"
    ? (isSideMenuVisible.value = false)
    : (isSideMenuVisible.value = true);
});
</script>

<template>
  <Sidebar v-model:visible="isSideMenuVisible">
    <template #container>
      <SidePanel />
    </template>
  </Sidebar>
  <Menubar>
    <template #start>
      <Button
        @click="isSideMenuVisible = !isSideMenuVisible"
        class="p-button-secondary"
        icon="pi pi-bars"
      />
    </template>
  </Menubar>
  <router-view />
</template>
