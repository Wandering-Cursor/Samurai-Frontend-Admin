<script setup lang="ts">
import { defineProps } from "vue";
import { Connection } from "@/api/types/account/Connection";

const $props = defineProps({
  connection: {
    type: Object as () => Connection,
    required: true,
  },
});

const slots = defineSlots<{
  // Allows to pass HTML elements to the component
  default(props: any): any;
}>();
</script>

<template>
  <Card>
    <template #title>
      {{ $t("entities.connection.title") }}
    </template>
    <template #subtitle>
      {{ connection.connection_id }}
    </template>
    <template #content>
      <p v-if="$props.connection.group_id">
        {{ $t("entities.connection.toGroup") }}:
        <RouterLink :to="`/organization/group/${$props.connection.group_id}`">
          {{ $props.connection.group_id }}
        </RouterLink>
      </p>
      <p v-if="$props.connection.faculty_id">
        {{ $t("entities.connection.toFaculty") }}:
        <RouterLink
          :to="`/organization/faculty/${$props.connection.faculty_id}/edit`"
        >
          {{ $props.connection.faculty_id }}
        </RouterLink>
      </p>
      <p v-if="$props.connection.department_id">
        {{ $t("entities.connection.toDepartment") }}:
        <RouterLink
          :to="`/organization/department/${$props.connection.department_id}/edit`"
        >
          {{ $props.connection.department_id }}
        </RouterLink>
      </p>
    </template>
    <template #footer>
      <p>
        {{ $t("entities.connection.createdAt") }}:
        {{ $props.connection.created_at }}
      </p>
      <p>
        {{ $t("entities.connection.updatedAt") }}:
        {{ $props.connection.updated_at }}
      </p>
      <slot />
    </template>
  </Card>
</template>
