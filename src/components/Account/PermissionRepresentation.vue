<script setup lang="ts">
import { defineProps } from 'vue';
import { Permission } from '@/api/types/account/Permission';

const $props = defineProps<{
    permission: Permission;
}>();

</script>

<template>
    <Card>
        <template #title>
            Permission
        </template>
        <template #subtitle>
            {{ $props.permission.account_permission_id }}
        </template>
        <template #content>
            <p>Name: {{ $props.permission.name }}</p>
            <p>Description: {{ $props.permission.description }}</p>
        </template>
    </Card>
</template>