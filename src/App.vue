<script setup lang="ts">
import Toast from "primevue/toast";
import DynamicDialog from "primevue/dynamicdialog";
</script>

<template>
  <router-view class="h-full w-full" />
  <Toast />
  <DynamicDialog />
</template>
