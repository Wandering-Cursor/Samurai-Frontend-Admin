<script setup lang="ts">
import { defineProps } from "vue";
import { Permission } from "@/api/types/account/Permission";

const $props = defineProps<{
  permission: Permission;
}>();

const slots = defineSlots<{
  // Allows to pass HTML elements to the component
  default(props: any): any;
}>();
</script>

<template>
  <Card>
    <template #title>
      {{ $t("entities.permissions.title") }}
    </template>
    <template #subtitle>
      {{ $props.permission.account_permission_id }}
    </template>
    <template #content>
      <p>{{ $t("entities.permissions.name") }}: {{ $props.permission.name }}</p>
      <p>
        {{ $t("entities.permissions.description") }}:
        {{ $props.permission.description }}
      </p>
    </template>
    <template #footer>
      <slot />
    </template>
  </Card>
</template>
