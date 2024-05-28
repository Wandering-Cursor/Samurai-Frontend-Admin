<script setup lang="ts">
import { Meta } from "@/api/types/common/Pagination";
import CopyToClipboard from "@/components/Utils/CopyToClipboard.vue";
import { PageState } from "primevue/paginator";
import { Ref, onMounted, reactive, ref } from "vue";
import { AxiosError } from "axios";
import { useToast } from "primevue/usetoast";
import {
  Department,
  DepartmentSearchRequest,
  DepartmentSearchResponse,
} from "@/api/types/organization/Department";
import { searchDepartments } from "@/api/organization/department/searchDepartments";
import { deleteDepartment } from "@/api/organization/department/deleteDepartment";
import { SearchFilter } from "@/api/types/common/Search";
import FilterPanel from "@/components/Search/FilterPanel/FilterPanel.vue";

const toast = useToast();

const list = reactive(new Array<Department>());
let metaInfo: Ref<Meta> = ref(new Meta());
let pageFilters: Ref<DepartmentSearchRequest> = ref(
  new DepartmentSearchRequest(1, 10)
);

const deleteDialogVisible = ref(false);
const deleteDepartmentID = ref("");

const filters: SearchFilter[] = [
  {
    title: "filters.genericName",
    propertyName: "name",
    placeholder: "КІПтаКЗ",
  },
];

const gotDepartments = (data: DepartmentSearchResponse) => {
  list.splice(0, list.length);
  list.push(...data.content);
  metaInfo.value.fromMeta(data.meta);
};

const onFilter = (filters: { [key: string]: any }) => {
  pageFilters.value = new DepartmentSearchRequest(
    pageFilters.value.page,
    pageFilters.value.page_size,
    filters.name
  );
  searchDepartments(pageFilters.value, gotDepartments, showError);
};

const onPageChange = (event: PageState) => {
  pageFilters.value.page = event.page + 1;
  pageFilters.value.page_size = event.rows;
  onFilter(pageFilters.value);
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

onMounted(() => {
  searchDepartments(pageFilters.value, gotDepartments, showError);
});

const showDeleteDepartmentDialog = (faculty_id: string) => {
  deleteDialogVisible.value = true;
  deleteDepartmentID.value = faculty_id;
};

const deleteDepartmentAction = () => {
  deleteDepartment(
    deleteDepartmentID.value,
    () => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Department deleted successfully",
        life: 3000,
      });
      searchDepartments(pageFilters.value, gotDepartments, showError);
      deleteDialogVisible.value = false;
    },
    (error: AxiosError) => {
      showError(error);
      deleteDialogVisible.value = false;
    }
  );
};
</script>

<template>
  <div class="grid w-full">
    <div class="col-10 pt-4">
      <DataTable :value="list" showGridlines stripedRows>
        <template #header>
          <div
            class="flex flex-wrap align-items-center justify-content-between gap-2"
          >
            <div></div>
            <RouterLink to="/organization/department/create">
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
          key="department_id"
          field="department_id"
          :header="$t('commonEntity.id')"
        />
        <Column key="name" field="name" :header="$t('commonEntity.name')" />
        <Column
          key="description"
          field="description"
          :header="$t('commonEntity.description')"
        />
        <Column
          key="faculties_count"
          field="faculties_count"
          :header="$t('filters.facultiesCount')"
        />
        <Column
          key="created_at"
          field="created_at"
          :header="$t('commonEntity.createdAt')"
        />
        <Column
          key="updated_at"
          field="updated_at"
          :header="$t('commonEntity.updatedAt')"
        />
        <Column key="actions" :header="$t('strings.actionsColumn')">
          <template #body="slotProps">
            <div class="flex flex-wrap gap-2">
              <CopyToClipboard
                :data="(slotProps.data as Department).department_id"
                :tooltip="$t('buttons.actions.copyID')"
                icon="pi pi-copy"
              />
              <RouterLink
                :to="`/organization/department/${(slotProps.data as Department).department_id}/edit`"
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
                  showDeleteDepartmentDialog(
                    (slotProps.data as Department).department_id as string
                  )
                "
              />
            </div>
          </template>
        </Column>
      </DataTable>
      <Paginator
        :rows="metaInfo.page_size"
        :totalRecords="metaInfo.total"
        v-on:page="onPageChange"
        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
        :rowsPerPageOptions="[1, 5, 10, 20, 30]"
      />
    </div>
    <div class="col-2">
      <FilterPanel
        :filters="filters"
        :filterHandler="onFilter"
        :search-name="$t('filters.departments')"
      />
    </div>
  </div>

  <Dialog
    v-model:visible="deleteDialogVisible"
    modal
    :header="$t('departmentsPages.list.modal.title')"
  >
    <span class="p-text-secondary block mb-5"
      >{{ $t("departmentsPages.list.modal.subtitle") }}
      {{ deleteDepartmentID }}</span
    >
    <div class="flex flex-row gap-2 justify-content-between">
      <Button
        :label="$t('buttons.actions.yes')"
        @click="deleteDepartmentAction"
      />
      <Button
        :label="$t('buttons.actions.no')"
        @click="deleteDialogVisible = false"
        severity="secondary"
      />
    </div>
  </Dialog>
</template>
