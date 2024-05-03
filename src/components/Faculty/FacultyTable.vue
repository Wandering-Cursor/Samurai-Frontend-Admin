<script setup lang="ts">
import { Meta } from '@/api/types/common/Pagination';
import { Faculty, FacultySearchRequest, FacultySearchResponse } from "@/api/types/organization/Faculty";
import CopyToClipboard from "@/components/Visuals/CopyToClipboard.vue";
import { PageState } from 'primevue/paginator';
import { onMounted, ref } from 'vue';
import { searchFaculties } from "@/api/organization/searchFaculties";
import { AxiosError } from 'axios';
import { defineProps } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const props = defineProps<{
    list: Faculty[];
    metaInfo: Meta;
    pageFilters: FacultySearchRequest;
    changePageCallback: (event: PageState) => void;
}>();

const deleteDialogVisible = ref(false);
const deleteFacultyId = ref('');

const gotFaculties = (data: FacultySearchResponse) => {
    props.list.splice(0, props.list.length);
    props.list.push(...data.content);
    props.metaInfo.fromMeta(data.meta);
};

const showError = (error: AxiosError) => {
    toast.add({ severity: 'error', summary: 'Error', detail: error.message });
    console.error(error);
}

onMounted(() => {
    searchFaculties(props.pageFilters, gotFaculties, showError);
});

const showDeleteFacultyDialog = (faculty_id: string) => {
    deleteDialogVisible.value = true;
    deleteFacultyId.value = faculty_id;
}

const deleteFaculty = () => {
    console.log('Delete faculty');
    deleteDialogVisible.value = false;
    searchFaculties(props.pageFilters, gotFaculties, showError);
}

</script>


<template>
    <DataTable :value="list" showGridlines stripedRows>
        <template #header>
            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                <div></div>
                <RouterLink to="/organization/faculty/create">
                    <Button icon="pi pi-plus" v-tooltip="'Create new account'" label="New" raised link />
                </RouterLink>
            </div>
        </template>
        <Column key="name" field="name" header="Name" />
        <Column key="department_id" field="department_id" header="Department ID" />
        <Column key="groups_count" filed="groups_count" header="Groups Count">
            <template #body="slotProps">
                <span>{{ (slotProps.data as Faculty).groups_count }}</span>
            </template>
        </Column>
        <Column key="created_at" field="created_at" header="Created At" />
        <Column key="updated_at" field="updated_at" header="Updated At" />
        <Column key="actions" header="Actions">
            <template #body="slotProps">
                <div class="flex flex-wrap gap-2">
                    <CopyToClipboard :data="(slotProps.data as Faculty).faculty_id" tooltip="Copy ID"
                        icon="pi pi-copy" />
                    <RouterLink :to="`/organization/faculty/${(slotProps.data as Faculty).faculty_id}`">
                        <Button icon="pi pi-eye" v-tooltip="'View faculty'" />
                    </RouterLink>
                    <RouterLink :to="`/organization/faculty/${(slotProps.data as Faculty).faculty_id}/edit`">
                        <Button icon="pi pi-pencil" v-tooltip="'Edit faculty'" />
                    </RouterLink>
                    <Button icon="pi pi-trash" v-tooltip="'Delete faculty'" class="p-button-danger"
                        @click="showDeleteFacultyDialog((slotProps.data as Faculty).faculty_id as string)" />
                </div>
            </template>
        </Column>
    </DataTable>
    <Paginator :rows="metaInfo.page_size" :totalRecords="metaInfo.total" v-on:page="changePageCallback"
        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
        :rowsPerPageOptions="[1, 5, 10, 20, 30]" />

    <Dialog v-model:visible="deleteDialogVisible" modal header="Delete faculty" :style="{ width: '50%' }">
        <span class="p-text-secondary block mb-5">Are you sure you want to delete faculty {{ deleteFacultyId }}?</span>
        <div class="flex flex-row gap-2 justify-content-center">
            <Button label="Yes" @click="deleteFaculty" />
            <Button label="No" @click="deleteDialogVisible = false" />
        </div>
    </Dialog>
</template>