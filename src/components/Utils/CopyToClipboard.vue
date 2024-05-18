<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import { copyToClipboard } from "./CopyToClipboardMethod";

const toast = useToast();

defineProps<{
  data: String;
  tooltip: String;
  icon: String;
}>();

</script>

<template>
  <Button v-tooltip="tooltip" :icon="icon as string" class="p-button"
    @click="() => { copyToClipboard(data as string, toast) }" />
</template>