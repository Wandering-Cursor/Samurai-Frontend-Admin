<script setup lang="ts">

import { apiClient } from '@/api/base';
import { Faculty } from '@/api/types/organization/Faculty';
import { PaginationMetaInformation, ShortProjectRepresentation } from '@/codegen/Api';
import { AutoCompleteItemSelectEvent } from 'primevue/autocomplete';
import { onMounted, reactive, ref } from 'vue';
import { ProjectSearchFilters } from '@/api/misc';
import ProjectsFilters from '@/components/Projects/ProjectsFilters.vue';
import ProjectsTable from '@/components/Projects/ProjectsTable.vue';
import { PageState } from 'primevue/paginator';

class Meta implements PaginationMetaInformation {
    total: number = 0;
    page: number = 1;
    page_size: number = 10;
    total_pages: number = 1;
}

const projects = reactive<ShortProjectRepresentation[]>([]);
const meta = ref<PaginationMetaInformation>(new Meta());
const filters = ref<ProjectSearchFilters>({
    page: 1,
    page_size: 10,
    faculty_id: null,
    name: null,
})

const makeSearch = () => {
    projects.splice(0, projects.length);

    apiClient.admin.searchProjectsAdminProjectsGet(
        filters.value,
    ).then(
        (res) => {
            projects.push(...res.data.content);
            meta.value = res.data.meta;
        }
    );
}

function facultySelected(event: AutoCompleteItemSelectEvent) {
    filters.value.faculty_id = (event.value as Faculty).faculty_id as string;
}

function onPageChange(event: PageState) {
    filters.value.page = event.page + 1;
    filters.value.page_size = event.rows;
    makeSearch();
}

onMounted(makeSearch);

</script>

<template>
    <Panel header="Projects" class="w-full">
        <div class="flex flex-column gap-4">
            <Panel header="Filters">
                <ProjectsFilters :faculty-selected="facultySelected" :filters="filters" :make-search="makeSearch" />
            </Panel>
            <ProjectsTable :projects="projects" :meta="meta" :onPageChange="onPageChange" />
        </div>
    </Panel>
</template>