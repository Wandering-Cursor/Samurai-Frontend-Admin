<script setup lang="ts">
import GroupsTable from "@/components/Group/GroupsTable.vue";
import { useHead } from "@unhead/vue";

useHead(
    {
        title: 'Groups',
        meta: [
            {
                name: 'og:description',
                content: 'Groups control page',
            },
        ],
    }
)
</script>

<template>
    <div class="flex flex-column w-full p-2">
        <div class="w-full">
            <p class="text-4xl font-bold text-center">Groups Control</p>
        </div>
        <div class="grid w-full">
            <GroupsTable />
        </div>
    </div>
</template>