<script setup lang="ts">
import LogOutButton from '@/components/auth/LogOutButton.vue';
import { title } from "@/components/SidePanel/AppTitle.vue";
</script>

<template>
    <span class="flex align-items-center justify-content-between gap-1 px-1 py-2">
        <span class="pi pi-graduation-cap text-2xl text-primary"></span>
        <span class="font-medium text-2xl font-semibold">{{ title }}</span>
        <LogOutButton />
    </span>
</template>