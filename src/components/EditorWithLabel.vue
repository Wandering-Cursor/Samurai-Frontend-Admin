<script setup lang="ts">
import Editor from "primevue/editor";

defineProps({
  binding: {
    type: Object,
    required: true,
  },
  label: {
    type: String,
    default: "commonEntity.description",
  },
});
</script>

<template>
  <div class="flex flex-column gap-2">
    <label for="projectDescription">
      {{ $t(label) }}
    </label>
    <!-- For some reason, the Editor component leks out of the container unless
	        you specify a parent component to be slightly larger than the Editor -->
    <div style="height: 550px">
      <Editor v-model="binding.description" style="height: 500px" />
    </div>
  </div>
</template>
