<script setup lang="ts">
import { Meta } from '@/api/types/common/Pagination';
import CopyToClipboard from "@/components/Visuals/CopyToClipboard.vue";
import { PageState } from 'primevue/paginator';
import { onMounted, ref } from 'vue';
import { AxiosError } from 'axios';
import { defineProps } from 'vue';
import { useToast } from 'primevue/usetoast';
import { Department, DepartmentSearchRequest, DepartmentSearchResponse } from '@/api/types/organization/Department';
import { searchDepartments } from '@/api/organization/department/searchDepartments';
import { deleteDepartment } from '@/api/organization/department/deleteDepartment';

const toast = useToast();

const props = defineProps<{
    list: Department[];
    metaInfo: Meta;
    pageFilters: DepartmentSearchRequest;
    changePageCallback: (event: PageState) => void;
}>();

const deleteDialogVisible = ref(false);
const deleteDepartmentID = ref('');

const gotDepartments = (data: DepartmentSearchResponse) => {
    props.list.splice(0, props.list.length);
    props.list.push(...data.content);
    props.metaInfo.fromMeta(data.meta);
};

const showError = (error: AxiosError) => {
    toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 5000 });
    console.error(error);
}

onMounted(() => {
    searchDepartments(props.pageFilters, gotDepartments, showError);
});

const showDeleteDepartmentDialog = (faculty_id: string) => {
    deleteDialogVisible.value = true;
    deleteDepartmentID.value = faculty_id;
}

const deleteDepartmentAction = () => {
    deleteDepartment(
        deleteDepartmentID.value,
        () => {
            toast.add({ severity: 'success', summary: 'Success', detail: 'Department deleted successfully', life: 3000 });
            searchDepartments(props.pageFilters, gotDepartments, showError);
            deleteDialogVisible.value = false;
        },
        (error: AxiosError) => {
            showError(error);
            deleteDialogVisible.value = false;
        }
    )
}

</script>


<template>
    <DataTable :value="list" showGridlines stripedRows>
        <template #header>
            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                <div></div>
                <RouterLink to="/organization/departments/create">
                    <Button icon="pi pi-plus" v-tooltip="'Create new account'" label="New" raised link />
                </RouterLink>
            </div>
        </template>
        <Column key="department_id" field="department_id" header="Department ID" />
        <Column key="name" field="name" header="Name" />
        <Column key="description" field="description" header="Description" />
        <Column key="faculties_count" field="faculties_count" header="Faculties Count" />
        <Column key="created_at" field="created_at" header="Created At" />
        <Column key="updated_at" field="updated_at" header="Updated At" />
        <Column key="actions" header="Actions">
            <template #body="slotProps">
                <div class="flex flex-wrap gap-2">
                    <CopyToClipboard :data="(slotProps.data as Department).department_id" tooltip="Copy ID"
                        icon="pi pi-copy" />
                    <RouterLink :to="`/organization/departments/${(slotProps.data as Department).department_id}/edit`">
                        <Button icon="pi pi-pencil" v-tooltip="'Edit Department'" />
                    </RouterLink>
                    <Button icon="pi pi-trash" v-tooltip="'Delete Department'" class="p-button-danger"
                        @click="showDeleteDepartmentDialog((slotProps.data as Department).department_id as string)" />
                </div>
            </template>
        </Column>
    </DataTable>
    <Paginator :rows="$props.metaInfo.page_size" :totalRecords="$props.metaInfo.total" v-on:page="changePageCallback"
        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
        :rowsPerPageOptions="[1, 5, 10, 20, 30]" />

    <Dialog v-model:visible="deleteDialogVisible" modal header="Delete faculty" :style="{ width: '50%' }">
        <span class="p-text-secondary block mb-5">Are you sure you want to delete department {{ deleteDepartmentID
            }}?</span>
        <div class="flex flex-row gap-2 justify-content-center">
            <Button label="Yes" @click="deleteDepartmentAction" />
            <Button label="No" @click="deleteDialogVisible = false" severity="secondary" />
        </div>
    </Dialog>
</template>