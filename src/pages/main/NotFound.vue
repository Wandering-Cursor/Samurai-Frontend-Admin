<script setup lang="ts">
import Card from 'primevue/card';
</script>

<template>
  <Card class="flex align-items-center justify-content-center align-self-center shadow-6">
    <template #title>
      Not Found!
    </template>
    <template #content>
      <p>Whoops! You should not see this. This page doesn't exist yet.</p>
      <p>
        But you can always go back to the <router-link to="/">
          Home Page
        </router-link>.
      </p>
    </template>
  </Card>
</template>