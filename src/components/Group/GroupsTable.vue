<script setup lang="ts">
import { Meta } from "@/api/types/common/Pagination";
import CopyToClipboard from "../Utils/CopyToClipboard.vue";
import { PageState } from "primevue/paginator";
import { Group } from "@/api/types/organization/Group";
import { Ref, onMounted, reactive, ref } from "vue";
import { AxiosError } from "axios";
import { useToast } from "primevue/usetoast";
import {
  SearchGroupsQuery,
  SearchGroupsResponse,
} from "@/api/types/organization/Group";
import { searchGroups } from "@/api/organization/group/searchGroups";
import { deleteGroup } from "@/api/organization/group/deleteGroup";
import { SearchFilter } from "@/api/types/common/Search";
import FilterPanel from "../Search/FilterPanel/FilterPanel.vue";

const toast = useToast();

const groupsList = reactive(new Array<Group>());
const metaInfo: Ref<Meta> = ref(new Meta());
const pageFilters: Ref<SearchGroupsQuery> = ref(new SearchGroupsQuery(1, 10));

const deleteDialogVisible = ref(false);
const deleteGroupId = ref("");

const filters: SearchFilter[] = [
  {
    title: "Faculty ID",
    propertyName: "faculty_id",
    placeholder: "Enter faculty ID",
  },
  {
    title: "Name",
    propertyName: "name",
    placeholder: "Enter group name",
  },
];

const gotGroups = (data: SearchGroupsResponse) => {
  // Clear the list and add the new data
  groupsList.splice(0, groupsList.length);
  groupsList.push(...data.content);
  metaInfo.value.fromMeta(data.meta);
};

const showError = (error: AxiosError) => {
  toast.add({
    severity: "error",
    summary: "Error",
    detail: error.message,
    life: 5000,
  });
  console.error(error);
};

const onFilter = (filters: { [key: string]: any }) => {
  pageFilters.value = new SearchGroupsQuery(
    pageFilters.value.page,
    pageFilters.value.page_size,
    filters.faculty_id,
    filters.name
  );
  searchGroups(pageFilters.value, gotGroups, showError);
};

const onPageChange = (event: PageState) => {
  pageFilters.value.page = event.page + 1;
  pageFilters.value.page_size = event.rows;
  onFilter(pageFilters.value);
};

const showDeleteGroupDialog = (group_id: string) => {
  deleteGroupId.value = group_id;
  deleteDialogVisible.value = true;
};

const deleteGroupAction = () => {
  deleteGroup(
    deleteGroupId.value,
    () => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Group deleted successfully",
        life: 5000,
      });
      deleteDialogVisible.value = false;
      searchGroups(pageFilters.value, gotGroups, showError);
    },
    (error: AxiosError) => {
      showError(error);
      deleteDialogVisible.value = false;
    }
  );
};

onMounted(() => {
  searchGroups(pageFilters.value, gotGroups, showError);
});
</script>

<template>
  <div class="grid w-full p-2">
    <div class="col-10 pt-4">
      <DataTable :value="groupsList" showGridlines stripedRows>
        <template #header>
          <div
            class="flex flex-wrap align-items-center justify-content-between gap-2"
          >
            <div></div>
            <RouterLink to="/organization/group/create">
              <Button
                icon="pi pi-plus"
                v-tooltip="'Create new group'"
                label="New"
                raised
                link
              />
            </RouterLink>
          </div>
        </template>
        <Column key="faculty_id" field="faculty_id" header="Faculty ID" />
        <Column key="name" field="name" header="Name" />
        <Column key="description" field="description" header="Description" />
        <Column key="actions" header="Actions">
          <template #body="slotProps">
            <div class="flex flex-wrap gap-2">
              <RouterLink
                :to="`/organization/group/${(slotProps.data as Group).group_id}`"
              >
                <Button icon="pi pi-eye" v-tooltip="'View group'" />
              </RouterLink>
              <CopyToClipboard
                :data="(slotProps.data as Group).group_id"
                tooltip="Copy ID"
                icon="pi pi-copy"
              />
              <RouterLink
                :to="`/organization/group/${(slotProps.data as Group).group_id}/edit`"
              >
                <Button icon="pi pi-pencil" v-tooltip="'Edit group'" />
              </RouterLink>
              <Button
                icon="pi pi-trash"
                v-tooltip="'Delete group'"
                class="p-button-danger"
                @click="
                  showDeleteGroupDialog(
                    (slotProps.data as Group).group_id as string
                  )
                "
              />
            </div>
          </template>
        </Column>
      </DataTable>
      <Paginator
        v-model:page="pageFilters.page"
        v-model:totalRecords="metaInfo.total"
        :rows="pageFilters.page_size"
        @onPageChange="onPageChange"
        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
        :rowsPerPageOptions="[1, 5, 10, 20, 30]"
      />
    </div>
    <div class="col-2">
      <FilterPanel
        v-bind:filters="filters"
        v-bind:filterHandler="onFilter"
        title="Filters"
        searchName="Group"
      />
    </div>
  </div>

  <Dialog
    v-model:visible="deleteDialogVisible"
    modal
    header="Delete group"
    :style="{ width: '50%' }"
  >
    <span class="p-text-secondary block mb-5"
      >Are you sure you want to delete group {{ deleteGroupId }}?</span
    >
    <div class="flex justify-content-end gap-2">
      <Button label="Yes" @click="deleteGroupAction" />
      <Button
        label="No"
        @click="deleteDialogVisible = false"
        severity="secondary"
      />
    </div>
  </Dialog>
</template>
