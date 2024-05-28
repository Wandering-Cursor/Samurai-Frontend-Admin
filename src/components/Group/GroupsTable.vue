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
    title: "filters.facultyID",
    propertyName: "faculty_id",
    placeholder: "de4052e9-5238-40b4-95bf-eac9e740c6af",
  },
  {
    title: "commonEntity.name",
    propertyName: "name",
    placeholder: "КН-343[Б]",
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
                :label="$t('buttons.actions.create')"
                raised
                link
              />
            </RouterLink>
          </div>
        </template>
        <Column
          key="faculty_id"
          field="faculty_id"
          :header="$t('filters.facultyID')"
        />
        <Column key="name" field="name" :header="$t('commonEntity.name')" />
        <Column
          key="description"
          field="description"
          :header="$t('commonEntity.description')"
        />
        <Column key="actions" :header="$t('strings.actionsColumn')">
          <template #body="slotProps">
            <div class="flex flex-wrap gap-2">
              <CopyToClipboard
                :data="(slotProps.data as Group).group_id"
                :tooltip="$t('buttons.actions.copyID')"
                icon="pi pi-copy"
              />
              <RouterLink
                :to="`/organization/group/${(slotProps.data as Group).group_id}/edit`"
              >
                <Button
                  icon="pi pi-pencil"
                  v-tooltip="$t('buttons.actions.edit')"
                />
              </RouterLink>
              <Button
                icon="pi pi-trash"
                v-tooltip="$t('buttons.actions.delete')"
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
        :searchName="$t('label.group')"
      />
    </div>
  </div>

  <Dialog
    v-model:visible="deleteDialogVisible"
    modal
    :header="$t('groupsPages.list.modal.title')"
  >
    <span class="p-text-secondary block mb-5">
      {{ $t("groupsPages.list.modal.subtitle") }} {{ deleteGroupId }}
    </span>
    <div class="flex flex-row gap-2 justify-content-between">
      <Button :label="$t('buttons.actions.yes')" @click="deleteGroupAction" />
      <Button
        :label="$t('buttons.actions.no')"
        @click="deleteDialogVisible = false"
        severity="secondary"
      />
    </div>
  </Dialog>
</template>
