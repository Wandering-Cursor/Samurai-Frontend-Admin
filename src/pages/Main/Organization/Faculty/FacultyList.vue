<script setup lang="ts">
import FacultyTable from "@/components/Faculty/FacultyTable.vue";
import FilterPanel from "@/components/Search/FilterPanel/FilterPanel.vue";

import { searchFaculties } from "@/api/organization/faculty/searchFaculties";

import { AxiosError } from "axios";

import { Ref, ref } from "vue";

import {
  Faculty,
  FacultySearchRequest,
  FacultySearchResponse,
} from "@/api/types/organization/Faculty";

import { Meta } from "@/api/types/common/Pagination";
import { SearchFilter } from "@/api/types/common/Search";

let list: Ref<Array<Faculty>> = ref([]);
let metaInfo: Ref<Meta> = ref(new Meta());
let pageFilters: Ref<FacultySearchRequest> = ref(
  new FacultySearchRequest(1, 10, {})
);

const showError = (error: AxiosError) => {
  console.error(error);
};

const gotFaculties = (data: FacultySearchResponse) => {
  list.value = [];
  list.value.push(...data.content);
  metaInfo.value.fromMeta(data.meta);
};

const onFilter = (filters: { [key: string]: any }) => {
  pageFilters.value = new FacultySearchRequest(
    pageFilters.value.page,
    pageFilters.value.page_size,
    filters
  );
  searchFaculties(pageFilters.value, gotFaculties, showError);
};

const onPageChange = (event: { page: number; rows: number }) => {
  pageFilters.value.page = event.page + 1;
  pageFilters.value.page_size = event.rows;
  onFilter(pageFilters.value);
};

const filters: SearchFilter[] = [
  {
    title: "filters.departmentID",
    propertyName: "department_id",
    placeholder: "dc5a37e2-a0bc-497e-98e3-76b977c6abae",
  },
  {
    title: "filters.genericName",
    propertyName: "name",
    placeholder: "КІП",
  },
];
</script>

<template>
  <div class="flex flex-column w-full p-2">
    <div class="w-full">
      <p class="text-4xl font-bold text-center">
        {{ $t("facultiesPages.list.title") }}
      </p>
    </div>
    <div class="flex flex-wrap gap-4 justify-content-evenly">
      <FacultyTable
        :list="list"
        :metaInfo="metaInfo"
        :pageFilters="pageFilters"
        :change-page-callback="onPageChange"
      />
      <FilterPanel
        :filters="filters"
        :filterHandler="onFilter"
        :search-name="$t('label.faculty')"
      />
    </div>
  </div>
</template>
