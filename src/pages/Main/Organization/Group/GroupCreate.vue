<script setup lang="ts">
import GroupCreateForm from "@/components/Group/GroupCreateForm.vue";
import { useHead } from "@unhead/vue";


useHead(
    {
        title: 'Create Group',
        meta: [
            {
                name: 'og:description',
                content: 'Create a new group',
            },
        ],
    }
)

</script>

<template>
    <GroupCreateForm />
</template>