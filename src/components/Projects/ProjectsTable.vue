<script setup lang="ts">
import { ShortProjectRepresentation } from "@/codegen/Api";
import { useToast } from "primevue/usetoast";
import { copyToClipboard } from "@/components/Utils/CopyToClipboardMethod";
import { useRouter } from "vue-router";
import { PageState } from "primevue/paginator";
import { ref } from "vue";
import { useDialog } from "primevue/usedialog";
import AssignProjectModal from "./AssignProjectModal.vue";
import { useI18nLocal } from "@/i18n/i18n";

const router = useRouter();
const toast = useToast();
const dialog = useDialog();

const { t } = useI18nLocal();

defineProps<{
  projects: ShortProjectRepresentation[];
  meta: { total: number; page: number; page_size: number; total_pages: number };
  onPageChange: (event: PageState) => void;
}>();

const assignProjectProjectId = ref<string>("");

const showAssignProjectModal = (projectId: string) => {
  assignProjectProjectId.value = projectId;

  dialog.open(AssignProjectModal, {
    data: {
      assignProjectProjectId: assignProjectProjectId,
    },
    props: {
      modal: true,
      header: t("projectsPages.list.modal.title"),
    },
  });
};
</script>

<template>
  <Panel header="Projects">
    <DataTable :value="projects" showGridlines stripedRows>
      <template #header>
        <div class="flex justify-content-end">
          <Button
            icon="pi pi-plus"
            :label="$t('buttons.actions.create')"
            @click="
              () => {
                router.push('/projects/create');
              }
            "
          />
        </div>
      </template>
      <Column field="project_id" :header="$t('commonEntity.id')">
        <template #body="slotProps">
          <p
            @click="() => { copyToClipboard((slotProps.data as ShortProjectRepresentation).project_id, toast) }"
            style="color: var(--primary-color); cursor: pointer"
          >
            ...{{
              (slotProps.data as ShortProjectRepresentation).project_id
                .split("-")
                .pop()
            }}
          </p>
        </template>
      </Column>
      <Column field="name" :header="$t('commonEntity.name')"></Column>
      <Column field="faculty_id" :header="$t('filters.facultyID')">
        <template #body="slotProps">
          <p
            @click="() => { copyToClipboard((slotProps.data as ShortProjectRepresentation).faculty_id, toast) }"
            style="color: var(--primary-color); cursor: pointer"
          >
            ...{{
              (slotProps.data as ShortProjectRepresentation).faculty_id
                .split("-")
                .pop()
            }}
          </p>
        </template>
      </Column>
      <Column
        field="created_at"
        :header="$t('commonEntity.createdAt')"
      ></Column>
      <Column
        field="updated_at"
        :header="$t('commonEntity.updatedAt')"
      ></Column>
      <Column :header="$t('strings.actionsColumn')">
        <template #body="slotProps">
          <div class="flex flex-warp gap-2">
            <RouterLink
              :to="`/projects/${(slotProps.data as ShortProjectRepresentation).project_id}/edit`"
            >
              <Button icon="pi pi-pencil" :label="$t('buttons.actions.edit')" />
            </RouterLink>
            <Button
              icon="pi pi-users"
              :label="$t('projectsPages.list.buttons.assign')"
              severity="info"
              @click="() => {showAssignProjectModal((slotProps.data as ShortProjectRepresentation).project_id)}"
            />
          </div>
        </template>
      </Column>
    </DataTable>
    <Paginator
      v-model:page="meta.page"
      v-model:totalRecords="meta.total"
      :rows="meta.page_size"
      @page="onPageChange"
      template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
      :rowsPerPageOptions="[1, 5, 10, 20, 30]"
    />
  </Panel>
</template>
