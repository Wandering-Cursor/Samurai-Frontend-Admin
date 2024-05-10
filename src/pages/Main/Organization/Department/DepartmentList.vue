<script setup lang="ts">
import FilterPanel from "@/components/Search/FilterPanel/FilterPanel.vue";

import { searchDepartments } from "@/api/organization/department/searchDepartments";

import { AxiosError } from "axios";

import { Ref, ref } from "vue";

import { Meta } from "@/api/types/common/Pagination";
import { SearchFilter } from "@/api/types/common/Search";
import { Department, DepartmentSearchRequest, DepartmentSearchResponse } from "@/api/types/organization/Department";
import DepartmentTable from "@/components/Department/DepartmentTable.vue";

let list: Ref<Array<Department>> = ref([]);
let metaInfo: Ref<Meta> = ref(new Meta());
let pageFilters: Ref<DepartmentSearchRequest> = ref(new DepartmentSearchRequest(1, 10));

const showError = (error: AxiosError) => {
    console.error(error);
}

const gotDepartments = (data: DepartmentSearchResponse) => {
    list.value = [];
    list.value.push(...data.content);
    metaInfo.value.fromMeta(data.meta);
};

const onFilter = (filters: { [key: string]: any }) => {
    pageFilters.value = new DepartmentSearchRequest(pageFilters.value.page, pageFilters.value.page_size, filters.name);
    searchDepartments(pageFilters.value, gotDepartments, showError);
};

const onPageChange = (event: { page: number, rows: number }) => {
    pageFilters.value.page = event.page + 1;
    pageFilters.value.page_size = event.rows;
    onFilter(pageFilters.value);
};

const filters: SearchFilter[] = [
    {
        title: "Name",
        propertyName: "name",
        placeholder: "КІПтаКЗ",
    },
]

</script>

<template>
    <div class="flex flex-column w-full p-2">
        <div class="w-full">
            <p class="text-4xl font-bold text-center">Departments Control</p>
        </div>
        <div class="grid w-full">
            <div class="col-10 pt-4">
                <DepartmentTable :list="list" :metaInfo="metaInfo" :pageFilters="pageFilters"
                    :change-page-callback="onPageChange">
                </DepartmentTable>
            </div>
            <div class="col-2">
                <FilterPanel :filters="filters" :filterHandler="onFilter" search-name="Departments" />
            </div>
        </div>
    </div>
</template>