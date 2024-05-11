<script setup lang="ts">

import DepartmentTable from "@/components/Department/DepartmentTable.vue";



</script>

<template>
    <div class="flex flex-column w-full p-2">
        <div class="w-full">
            <p class="text-4xl font-bold text-center">Departments Control</p>
        </div>
        <div class="grid w-full p-2">
            <DepartmentTable />
        </div>
    </div>
</template>