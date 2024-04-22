<script setup lang="ts">
import { SearchFilter } from '@/api/types/common/Search';
import { defineProps, reactive, watch } from 'vue';
import { useToast } from "primevue/usetoast";
import Dropdown from 'primevue/dropdown';


const toast = useToast();

const props = defineProps({
    title: {
        type: String,
        default: "Filters"
    },
    filters: {
        type: Array as () => SearchFilter[],
        default: () => []
    },
    filterHandler: {
        type: Function,
        default: () => { }
    },
    searchName: {
        type: String,
        default: "Item"
    }
});

let filterValues = reactive<{ [key: string]: any }>({});

watch(() => props.filters.length, () => {
    props.filters.forEach(filter => {
        if (filterValues[filter.propertyName] === undefined) {
            filterValues[filter.propertyName] = null;
        }
    });
}, { immediate: true });

const forwardFilter = () => {
    toast.add({
        severity: "info",
        detail: 'Filtering...',
        life: 500,
    })
    let original = { ...filterValues };

    for (const key in filterValues) {
        if (filterValues[key] === null) {
            delete filterValues[key];
        }
        if (typeof (filterValues[key]) === 'object') {
            if (filterValues[key].value === null) {
                delete filterValues[key];
            }
            filterValues[key] = filterValues[key].value;
        }
    }
    props.filterHandler(filterValues);

    filterValues = reactive(original);
}

</script>

<template>
    <Fieldset :legend="title">
        <div class="flex flex-column gap-4">
            <div class="flex flex-column gap-2" v-for="filter in props.filters">
                <label :for="filter.propertyName">{{ filter.title }}</label>
                <Dropdown v-if="filter.options" :id="filter.propertyName" v-model="filterValues[filter.propertyName]"
                    :options="filter.options" optionLabel="label" :placeholder="filter.placeholder">
                    <template #value="slotProps">
                        <div v-if="slotProps.value" class="flex align-items-center">
                            <div>{{ slotProps.value.visibleName }}</div>
                        </div>
                        <span v-else>
                            {{ slotProps.placeholder }}
                        </span>
                    </template>
                    <template #option="slotProps">
                        <div class="flex flex-row gap-2">
                            <i :class="slotProps.option.value"></i>
                            <span>{{ slotProps.option.visibleName }}</span>
                        </div>
                    </template>
                </Dropdown>

                <InputText v-if="!filter.options" :id="filter.propertyName" v-model="filterValues[filter.propertyName]"
                    :placeholder="filter.placeholder" />
            </div>
            <Button @click="forwardFilter" :label="`Filter ${props.searchName}`" />
        </div>
    </Fieldset>
</template>