<script setup lang="ts">
import AuthenticationRequired from "@/components/AuthenticationRequired.vue";
import Main from "@/pages/main/Main.vue";
</script>

<template>
    <AuthenticationRequired :WrappedComponent="Main" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        AuthenticationRequired,
        Main
    }
});
</script>