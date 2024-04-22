<script setup lang="ts">
import { SearchFilter } from '@/api/types/common/Search';
import { defineProps, reactive, watch } from 'vue';
import { showToast } from 'vant';

const props = defineProps({
    title: {
        type: String,
        default: "Filters"
    },
    filters: {
        type: Array as () => SearchFilter[],
        default: () => []
    },
    onFilter: {
        type: Function,
        default: (filterValues: object) => {console.log("Filtering...", filterValues);}
    },
    searchName: {
        type: String,
        default: "Item"
    }
});

const filterValues = reactive<{ [key: string]: any }>({});

watch(() => props.filters.length, () => {
    props.filters.forEach(filter => {
        if (filterValues[filter.propertyName] === undefined) {
            filterValues[filter.propertyName] = null;
        }
    });
}, { immediate: true });

const forwardFilter = () => {
    showToast({
        type: 'loading',
        message: 'Filtering...',
        duration: 500,
        closeOnClick: true,
    })
    props.onFilter(filterValues);
}

</script>

<template>
    <div style="display: grid;">
        <h2 class="centeredText">{{ title }}</h2>
        <VanCellGroup>
            <VanCell center v-for="filter in props.filters" :key="filter.propertyName" :title="filter.title">
                <VanField v-model="filterValues[filter.propertyName]" placeholder="Filter value" />
            </VanCell>
        </VanCellGroup>
        <VanButton class="stretch" @click="forwardFilter">Filter {{props.searchName}}</VanButton>
    </div>
</template>