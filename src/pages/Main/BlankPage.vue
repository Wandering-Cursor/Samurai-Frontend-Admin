<script setup lang="ts">
import Card from 'primevue/card';
import { useHead } from '@unhead/vue'

useHead({
  title: 'Blank page',
  meta: [
    { property: 'og:title', content: 'Not Found!' },
    { property: 'og:description', content: 'This web-page was not found!' },
  ]
});
</script>

<template>
  <Card class="flex align-items-center justify-content-center align-self-center shadow-6">
    <template #title>
      Home Page
    </template>
    <template #content>
      <p>Please, select one of the options from the side menu on the left.</p>
    </template>
  </Card>
</template>