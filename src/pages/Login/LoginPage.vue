<script setup lang="ts">
import LoginForm from "@/components/Login/LoginForm.vue";
import { useHead } from '@unhead/vue'

useHead({
  title: 'Login Page',
  meta: [
    { property: 'og:title', content: 'Login Page' },
    { property: 'og:description', content: 'Sign in to the web-site' },
  ]
});
</script>

<template>
  <div class="shadow-6 w-full h-full flex justify-content-center align-items-center">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    LoginForm
  },
  data() {
    return {
    };
  }
});
</script>