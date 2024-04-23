<template>
    <div class="card flex justify-content-center w-full">
        <Menu :model="items" class="flex-grow-1">
            <template #start>
                <span class="flex align-items-center justify-content-center gap-1 px-1 py-2">
                    <span class="pi pi-graduation-cap text-2xl text-primary"></span>
                    <span class="font-medium text-2xl font-semibold">Admin Page</span>
                </span>
                <Divider />
            </template>
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
            </template>
            <template #end>
                <Divider />
                <span class="flex align-items-center justify-content-center">
                    <span class="font-medium text-xs font-light">By
                        <a href="https://github.com/Wandering-Cursor/">
                            <Button link label="Wandering-Cursor" class="font-medium text-xs font-light p-0 m-0" />
                        </a>
                        team</span>
                </span>
            </template>
        </Menu>
    </div>
</template>

<script setup lang="ts">
import Divider from 'primevue/divider';
import { ref } from 'vue';

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