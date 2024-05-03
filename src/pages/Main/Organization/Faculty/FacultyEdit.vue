<script setup lang="ts">

import FacultyUpdateForm from "@/components/Faculty/FacultyUpdateForm.vue";
import { useRoute } from "vue-router";

const route = useRoute();

</script>

<template>
    <FacultyUpdateForm :faculty_id="route.params.id as string" />
</template>