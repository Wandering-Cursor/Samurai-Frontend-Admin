<script setup lang="ts">
import AuthenticationRequired from "@/components/AuthenticationRequired.vue";
import MainPage from "@/pages/main/MainPage.vue";
</script>

<template>
  <AuthenticationRequired :wrapped="MainPage" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    AuthenticationRequired,
  }
});
</script>