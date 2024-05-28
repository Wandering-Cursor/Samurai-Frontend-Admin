<script setup lang="ts">
import { Meta } from "@/api/types/common/Pagination";
import {
  Faculty,
  FacultySearchRequest,
  FacultySearchResponse,
} from "@/api/types/organization/Faculty";
import CopyToClipboard from "@/components/Utils/CopyToClipboard.vue";
import { PageState } from "primevue/paginator";
import { onMounted, ref } from "vue";
import { searchFaculties } from "@/api/organization/faculty/searchFaculties";
import { AxiosError } from "axios";
import { defineProps } from "vue";
import { useToast } from "primevue/usetoast";
import { deleteFaculty } from "@/api/organization/faculty/deleteFaculty";
import { currentPageReportTemplate } from "@/i18n/i18n";

const toast = useToast();

const props = defineProps<{
  list: Faculty[];
  metaInfo: Meta;
  pageFilters: FacultySearchRequest;
  changePageCallback: (event: PageState) => void;
}>();

const deleteDialogVisible = ref(false);
const deleteFacultyId = ref("");

const gotFaculties = (data: FacultySearchResponse) => {
  props.list.splice(0, props.list.length);
  props.list.push(...data.content);
  props.metaInfo.fromMeta(data.meta);
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
  searchFaculties(props.pageFilters, gotFaculties, showError);
});

const showDeleteFacultyDialog = (faculty_id: string) => {
  deleteDialogVisible.value = true;
  deleteFacultyId.value = faculty_id;
};

const deleteFacultyAction = () => {
  deleteFaculty(
    deleteFacultyId.value,
    () => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Faculty deleted successfully",
        life: 3000,
      });
      searchFaculties(props.pageFilters, gotFaculties, showError);
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
  <div class="flex flex-wrap gap-4 justify-content-evenly flex-grow-1">
    <div class="w-full">
      <DataTable
        :value="list"
        showGridlines
        stripedRows
        scrollable
        class="max-w-screen"
      >
        <template #header>
          <div
            class="flex flex-wrap align-items-center justify-content-between gap-2"
          >
            <div></div>
            <RouterLink to="/organization/faculty/create">
              <Button
                icon="pi pi-plus"
                :label="$t('buttons.actions.create')"
                raised
                link
              />
            </RouterLink>
          </div>
        </template>
        <Column key="name" field="name" :header="$t('commonEntity.name')" />
        <Column
          key="description"
          field="description"
          :header="$t('commonEntity.description')"
        />
        <Column
          key="department_id"
          field="department_id"
          :header="$t('filters.departmentID')"
        />
        <Column
          key="groups_count"
          filed="groups_count"
          :header="$t('filters.groupsCount')"
        >
          <template #body="slotProps">
            <span>{{ (slotProps.data as Faculty).groups_count }}</span>
          </template>
        </Column>
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
                :data="(slotProps.data as Faculty).faculty_id"
                :tooltip="$t('buttons.actions.copyID')"
                icon="pi pi-copy"
              />
              <RouterLink
                :to="`/organization/faculty/${(slotProps.data as Faculty).faculty_id}/edit`"
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
                  showDeleteFacultyDialog(
                    (slotProps.data as Faculty).faculty_id as string
                  )
                "
              />
            </div>
          </template>
        </Column>
      </DataTable>
      <Paginator
        :rows="$props.metaInfo.page_size"
        :totalRecords="$props.metaInfo.total"
        v-on:page="changePageCallback"
        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
        :rowsPerPageOptions="[1, 5, 10, 20, 30]"
        :currentPageReportTemplate="currentPageReportTemplate()"
      />
    </div>
  </div>

  <Dialog
    v-model:visible="deleteDialogVisible"
    modal
    :header="$t('facultiesPages.list.modal.title')"
  >
    <span class="p-text-secondary block mb-5"
      >{{ $t("facultiesPages.list.modal.subtitle") }}
      {{ deleteFacultyId }}</span
    >
    <div class="flex flex-row gap-2 justify-content-between">
      <Button :label="$t('buttons.actions.yes')" @click="deleteFacultyAction" />
      <Button
        :label="$t('buttons.actions.no')"
        @click="deleteDialogVisible = false"
        severity="secondary"
      />
    </div>
  </Dialog>
</template>
