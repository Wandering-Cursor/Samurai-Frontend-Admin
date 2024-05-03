<script setup lang="ts">
import { getPermissions } from '@/api/admin/getPermissions';
import SearchField from '@/components/Search/SearchField.vue';
import { AutoCompleteCompleteEvent, AutoCompleteItemSelectEvent } from 'primevue/autocomplete';

import { defineProps } from 'vue';
import { useToast } from 'primevue/usetoast';
import { Permission } from '@/api/types/account/Permission';

const toast = useToast();

defineProps({
    id: {
        type: String,
        default: 'permissions-search'
    },
    label: {
        type: String,
        default: 'Permission'
    },
    placeholder: {
        type: String,
        default: 'Enter a name to search for a permission',
    },
    onItemSelect: {
        type: (Function as unknown as () => (event: AutoCompleteItemSelectEvent) => void),
        required: true,
    },
    multiple: {
        type: Boolean,
        default: false,
    },
});

const searchMethod = (event: AutoCompleteCompleteEvent, callback: (newItems: object[]) => void) => {
    getPermissions(
        (data) => {
            callback(data.filter((item: Permission) => item.name.toLowerCase().includes(event.query.toLowerCase())));
        },
        (error) => {
            console.error(error);
            toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to search permissions', life: 5000 });
        }
    );
};

</script>

<template>
    <SearchField :id="id" :label="label" :placeholder="placeholder" :on-item-select="onItemSelect"
        :search-method="searchMethod" :multiple="multiple">
    </SearchField>
</template>