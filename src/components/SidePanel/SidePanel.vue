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
        icon: 'pi pi-palette',
        route: '/'
    },
    {
        label: 'Accounts',
        icon: 'pi pi-link',
        route: "/accounts"
    },
    {
        label: 'Organization',
        icon: 'pi pi-users',
        route: "/organization"
    },
    {
        label: 'Projects',
        icon: 'pi pi-folder',
        route: "/projects"
    },
    {
        label: 'Other Settings',
        icon: 'pi pi-cog',
        route: "/other"
    }
]);

</script>