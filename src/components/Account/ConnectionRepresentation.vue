<script setup lang="ts">
import { defineProps } from 'vue';
import { Connection } from '@/api/types/account/Connection';

const $props = defineProps(
    {
        connection: {
            type: Object as () => Connection,
            required: true
        }
    }
);
</script>

<template>
    <Card>
        <template #title>
            Connection
        </template>
        <template #subtitle>
            {{ connection.connection_id }}
        </template>
        <template #content>
            <p v-if="$props.connection.group_id">
                To Group: <RouterLink :to="`/groups/${$props.connection.group_id}`">
                    {{ $props.connection.group_id }}
                </RouterLink>
            </p>
            <p v-if="$props.connection.faculty_id">
                To Faculty: <RouterLink :to="`/faculties/${$props.connection.faculty_id}`">
                    {{ $props.connection.faculty_id }}
                </RouterLink>
            </p>
            <p v-if="$props.connection.department_id">
                To Department: <RouterLink :to="`/departments/${$props.connection.department_id}`">
                    {{ $props.connection.department_id }}
                </RouterLink>
            </p>
        </template>
        <template #footer>
            <p>Created At: {{ $props.connection.created_at }}</p>
            <p>Updated At: {{ $props.connection.updated_at }}</p>
        </template>
    </Card>
</template>