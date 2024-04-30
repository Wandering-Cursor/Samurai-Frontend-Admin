<script setup lang="ts">
import { MenuRouterBindProps } from 'primevue/menu';
import { MenuItem } from 'primevue/menuitem';

const props = defineProps<{
    item: MenuItem;
    props: MenuRouterBindProps;
}>();

</script>

<template>
    <router-link v-if="props.item.route" v-slot="{ href, navigate }" :to="props.item.route" custom>
        <a v-ripple :href="href" v-bind="props.props.action" @click="navigate">
            <span :class="props.item.icon" />
            <span class="ml-2">{{ props.item.label }}</span>
        </a>
    </router-link>
</template>