<script setup lang="ts">


import DepartmentUpdateForm from "@/components/Department/DepartmentUpdateForm.vue";
import { useRoute } from "vue-router";

const route = useRoute();

</script>

<template>
    <DepartmentUpdateForm :department_id="route.params.id as string" />
</template>