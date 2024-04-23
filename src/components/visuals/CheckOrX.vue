<script setup lang="ts">
const props = defineProps({
    value: Boolean
})
</script>

<template>
    <i class="pi pi-check" v-if="props.value" />
    <i class="pi pi-times" v-else />
</template>