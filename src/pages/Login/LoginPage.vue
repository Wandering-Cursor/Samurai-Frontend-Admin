<script setup lang="ts">
import LoginForm from "@/components/Login/LoginForm.vue";
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