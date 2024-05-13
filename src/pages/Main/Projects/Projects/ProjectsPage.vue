<script setup lang="ts">

import { apiClient } from '@/api/base';
import { Faculty } from '@/api/types/organization/Faculty';
import { PaginationMetaInformation, ShortProjectRepresentation } from '@/codegen/Api';
import FacultySearchField from '@/components/Search/Faculty/FacultySearchField.vue';
import { AutoCompleteItemSelectEvent } from 'primevue/autocomplete';
import { onMounted, reactive, ref } from 'vue';
import { copyToClipboard } from "@/components/Visuals/CopyToClipboardMethod";
import { useToast } from 'primevue/usetoast';

const toast = useToast();


interface Filters {
    page: number;
    page_size: number;
    faculty_id: string | null;
    name: string | null;
}

class Meta implements PaginationMetaInformation {
    total: number = 0;
    page: number = 1;
    page_size: number = 10;
    total_pages: number = 1;
}

const projects = reactive<ShortProjectRepresentation[]>([]);
const meta = ref<PaginationMetaInformation>(new Meta());
const filters = ref<Filters>({
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

function onPageChange(event: { page: number, rows: number }) {
    filters.value.page = event.page;
    filters.value.page_size = event.rows;
    makeSearch();
}

onMounted(makeSearch);

</script>

<template>
    <Panel header="Projects" class="w-full">
        <div class="flex flex-column gap-4">
            <Panel header="Filters">
                <div class="flex flex-wrap justify-content-between gap-4">
                    <div class="flex flex-wrap flex-row gap-4">
                        <FacultySearchField :on-item-select="facultySelected" />
                        <InputText placeholder="Name" v-model="filters.name" />
                    </div>
                    <Button class="flex-grow-1 lg:max-w-8rem" label="Search" @click="makeSearch" />
                </div>
            </Panel>
            <Panel header="Table">
                <DataTable :value="projects">
                    <template #header>
                        <div class="flex justify-content-end">
                            <Button icon="pi pi-plus" label="New" />
                        </div>
                    </template>
                    <Column field="project_id" header="Project ID">
                        <template #body="slotProps">
                            <p @click="() => { copyToClipboard((slotProps.data as ShortProjectRepresentation).project_id, toast) }"
                                style="color: var(--primary-color); cursor: pointer;">
                                ...{{ (slotProps.data as ShortProjectRepresentation).project_id.split('-').pop() }}
                            </p>
                        </template>
                    </Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="faculty_id" header="Faculty ID">
                        <template #body="slotProps">
                            <p @click="() => { copyToClipboard((slotProps.data as ShortProjectRepresentation).faculty_id, toast) }"
                                style="color: var(--primary-color); cursor: pointer;">
                                ...{{ (slotProps.data as ShortProjectRepresentation).faculty_id.split('-').pop() }}
                            </p>
                        </template>
                    </Column>
                    <Column field="created_at" header="Created At"></Column>
                    <Column field="updated_at" header="Updated At"></Column>
                    <Column header="Actions">
                        <template #body>
                            <div class="flex flex-warp gap-2">
                                <Button icon="pi pi-pencil" class="p-button-rounded" />
                                <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
                <Paginator v-model:page="meta.page" v-model:totalRecords="meta.total" :rows="meta.page_size"
                    @onPageChange="onPageChange"
                    template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
                    :rowsPerPageOptions="[1, 5, 10, 20, 30]" />
            </Panel>
        </div>
    </Panel>
</template>