<template>
  <div class="card flex justify-content-center w-full">
    <Menu :model="items" class="flex-grow-1">
      <template #start>
        <AppHeader />
        <Divider />
      </template>
      <template #item="{ item, props }">
        <SidePanelRouterLink :item="item" :props="props" />
      </template>
      <template #end>
        <Divider />
        <div class="flex justify-content-center">
          <a href="https://github.com/Wandering-Cursor/">
            <Button link label="By Wandering-Cursor team" class="font-medium text-xs font-light p-0 m-0" />
          </a>
        </div>
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import Divider from 'primevue/divider';
import { ref } from 'vue';
import AppHeader from '@/components/SidePanel/AppHeader.vue';
import SidePanelRouterLink from './SidePanelRouterLink.vue';

const items = ref([
  {
    label: 'Home',
    items: [
      { label: 'Home', icon: 'pi pi-home', route: '/' },
    ]
  },
  {
    label: 'Accounts',
    items: [
      { label: 'Accounts', icon: 'pi pi-user', route: "/accounts" },
    ]
  },
  {
    label: 'Organization',
    items: [
      { label: 'Departments', icon: 'pi pi-building', route: "/organization/departments" },
      { label: 'Faculties', icon: 'pi pi-building-columns', route: "/organization/faculty" },
      { label: 'Groups', icon: 'pi pi-users', route: "/organization/groups" }
    ]
  },
  {
    label: 'Projects',
    items: [
      { label: 'Projects', icon: 'pi pi-folder-open', route: "/projects" },
      { label: 'Tasks', icon: 'pi pi-briefcase', route: "/tasks" }
    ]
  },
  {
    label: 'Miscellaneous',
    items: [
      { label: 'Settings', icon: 'pi pi-cog', route: "/settings" },
    ]
  }
]);

</script>