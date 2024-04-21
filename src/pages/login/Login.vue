<script setup lang="ts">
import LoginForm from "@/components/login/LoginForm.vue";
</script>

<template>
    <VanSpace direction="vertical" fill align="center" class="fullPageHeight justifyCenter">
        <LoginForm/>
    </VanSpace>
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