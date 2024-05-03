<script setup lang="ts">
import { useToast } from "primevue/usetoast";

const toast = useToast();

const copyToClipboard = (value: string) => {
  navigator.clipboard
    .writeText(value)
    .then(() => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Copied to clipboard",
        life: 1000,
      });
    })
    .catch((err) => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Could not copy text",
        life: 2000,
      });
      console.error(err);
    });
};

defineProps<{
  data: String;
  tooltip: String;
  icon: String;
}>();

</script>

<template>
  <Button v-tooltip="tooltip" :icon="icon as string" class="p-button"
    @click="() => { copyToClipboard(data as string) }" />
</template>