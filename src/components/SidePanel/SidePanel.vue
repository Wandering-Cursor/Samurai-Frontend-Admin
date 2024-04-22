<template>
    <div class="card flex justify-content-center w-full">
        <Menu :model="items" class="flex-grow-1">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
            </template>
        </Menu>
    </div>
</template>

<script setup lang="ts">
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