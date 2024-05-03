<script setup lang="ts">
const props = defineProps({
    value: Boolean
})
</script>

<template>
  <i
    v-if="props.value"
    class="pi pi-check"
  />
  <i
    v-else
    class="pi pi-times"
  />
</template>