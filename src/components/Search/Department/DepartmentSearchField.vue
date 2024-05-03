<script setup lang="ts">
import { searchDepartments } from '@/api/organization/department/searchDepartments';
import { DepartmentSearchRequest } from '@/api/types/organization/Department';
import SearchField from '@/components/Search/SearchField.vue';
import { AutoCompleteCompleteEvent, AutoCompleteItemSelectEvent } from 'primevue/autocomplete';
import { defineProps } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const props = defineProps({
    id: {
        type: String,
        default: 'department-search'
    },
    label: {
        type: String,
        default: 'Department'
    },
    placeholder: {
        type: String,
        default: 'Enter a name to search for a department',
    },
    onItemSelect: {
        type: (Function as unknown as () => (event: AutoCompleteItemSelectEvent) => void),
        required: true,
    },
});

const searchMethod = (event: AutoCompleteCompleteEvent, callback: (newItems: object[]) => void) => {
    let request = new DepartmentSearchRequest();
    request.name = event.query;

    searchDepartments(
        request,
        (data) => {
            callback(data.content);
        },
        (error) => {
            console.error(error);
            toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to search departments', life: 5000 });
        }
    )
};

</script>


<template>
    <SearchField :id="props.id" :label="props.label" :placeholder="props.placeholder" :search-method="searchMethod"
        :on-item-select="props.onItemSelect" :option-label="'name'" />
</template>