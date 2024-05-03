<script setup lang="ts">
import LogOutButton from '@/components/Auth/LogOutButton.vue';
import { title } from "@/components/AppTitle";
</script>

<template>
  <span class="flex align-items-center justify-content-between gap-1 px-1 py-2">
    <span class="pi pi-graduation-cap text-2xl text-primary" />
    <span class="font-medium text-2xl font-semibold">{{ title }}</span>
    <LogOutButton />
  </span>
</template>