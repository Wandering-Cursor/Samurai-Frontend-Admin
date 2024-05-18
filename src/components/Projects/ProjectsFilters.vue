<script setup lang="ts">

import { ProjectSearchFilters } from '@/api/misc';
import { AutoCompleteItemSelectEvent } from 'primevue/autocomplete';


defineProps<{
    filters: ProjectSearchFilters,
    makeSearch: () => void,
    facultySelected: (event: AutoCompleteItemSelectEvent) => void,
}>(
);
</script>

<template>
    <div class="flex flex-wrap justify-content-between gap-4">
        <div class="flex flex-wrap flex-row gap-4">
            <FacultySearchField :on-item-select="facultySelected" />
            <InputText placeholder="Name" v-model="filters.name" />
        </div>
        <Button class="flex-grow-1 lg:max-w-8rem" label="Search" @click="makeSearch" />
    </div>
</template>