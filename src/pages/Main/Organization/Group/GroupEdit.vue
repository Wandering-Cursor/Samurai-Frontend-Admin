<script setup lang="ts">
import GroupUpdateForm from "@/components/Group/GroupUpdateForm.vue";
import { useHead } from "@unhead/vue";
import { useRoute } from "vue-router";

const route = useRoute();

useHead({
    title: `Edit Group ${route.params.id as string}`,
    meta: [
        {
            property: "description",
            content: "Edit Group"
        },
        {
            property: "og:title",
            content: `Edit Group ${route.params.id as string}`
        }
    ]
});

</script>

<template>
    <GroupUpdateForm :group_id="route.params.id as string" />
</template>