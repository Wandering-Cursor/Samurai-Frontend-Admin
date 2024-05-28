<script setup lang="ts">
import { apiClient } from "@/api/base";
import { onMounted, ref } from "vue";
import {
  Faculty,
  ProjectRepresentation as IProjectRepresentation,
  TaskRepresentationShortDescription,
} from "@/codegen/Api";
import { useToast } from "primevue/usetoast";
import { useRoute, useRouter } from "vue-router";
import FacultySearchField from "@/components/Search/Faculty/FacultySearchField.vue";
import { AutoCompleteItemSelectEvent } from "primevue/autocomplete";
import ProjectsTasksDataView from "./ProjectsTasksDataView.vue";
import EditorWithLabel from "@/components/EditorWithLabel.vue";

const toast = useToast();
const router = useRouter();
const route = useRoute();

class ProjectRepresentation implements IProjectRepresentation {
  created_at?: string | undefined;
  updated_at?: string | undefined;
  name: string = "";
  description?: string | null | undefined;
  faculty_id: string = "";
  project_id: string = "";
  tasks: TaskRepresentationShortDescription[] = [];
}

let projectEntity = ref<ProjectRepresentation>(new ProjectRepresentation());
const showDeleteProject = ref(false);

const saveProject = () => {
  apiClient.admin
    .updateProjectAdminProjectProjectIdPut(
      projectEntity.value.project_id,
      projectEntity.value
    )
    .then(() => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Project updated successfully",
        life: 3000,
      });
      router.push({ name: "ProjectsList" });
    })
    .catch((error) => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: error.message,
        life: 5000,
      });
    });
};

const showDeleteProjectModal = () => {
  showDeleteProject.value = true;
};

const callProjectRemoval = () => {
  apiClient.admin
    .deleteProjectAdminProjectProjectIdDelete(projectEntity.value.project_id)
    .then(() => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Project deleted successfully",
        life: 3000,
      });
      router.push("/projects");
    })
    .catch((error) => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: error.message,
        life: 5000,
      });
    });
};

const facultySelected = (event: AutoCompleteItemSelectEvent) => {
  projectEntity.value.faculty_id = (event.value as Faculty)
    .faculty_id as string;
};

const loadProject = (projectId: string) => {
  apiClient.admin
    .getProjectAdminProjectProjectIdGet(projectId)
    .then((res) => {
      projectEntity.value = res.data;
    })
    .catch((error) => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: error.message,
        life: 5000,
      });
    });
};

onMounted(() => {
  let projectId = route.params.id as string;
  loadProject(projectId);
});
</script>

<template>
  <Panel class="w-full">
    <template #header>
      <div class="w-full flex justify-content-between flex-wrap">
        <div class="flex align-items-center gap-2">
          <RouterLink :to="{ name: 'ProjectsList' }">
            <Button icon="pi pi-chevron-left" aria-label="Back" />
          </RouterLink>
          <p class="font-semibold text-lg">
            {{ $t("projectsPages.edit.title") }}
          </p>
        </div>
        <div class="flex align-items-center gap-2">
          <Button
            icon="pi pi-refresh"
            :label="$t('buttons.actions.update')"
            severity="info"
            @click="
              () => {
                loadProject(projectEntity.project_id);
              }
            "
          />
          <Button
            icon="pi pi-save"
            :label="$t('buttons.actions.save')"
            @click="saveProject"
          />
          <Button
            icon="pi pi-trash"
            :label="$t('buttons.actions.delete')"
            @click="showDeleteProjectModal"
            severity="danger"
          />
        </div>
      </div>
    </template>
    <ScrollPanel>
      <div class="flex flex-column gap-2">
        <p>{{ $t("commonEntity.id") }} {{ projectEntity.project_id }}</p>
        <div class="flex flex-column gap-2">
          <label for="projectName">{{ $t("commonEntity.name") }}</label>
          <InputText
            id="projectName"
            v-model="projectEntity.name"
            placeholder="Project Name"
          />
        </div>
        <div class="flex flex-column gap-2">
          <FacultySearchField :on-item-select="facultySelected" />
        </div>
        <EditorWithLabel v-bind:binding="projectEntity" />
        <ProjectsTasksDataView :projectEntity="projectEntity" />
        <p>
          {{ $t("commonEntity.createdAt") }}: {{ projectEntity.created_at }}
        </p>
        <p>
          {{ $t("commonEntity.updatedAt") }}: {{ projectEntity.updated_at }}
        </p>
      </div>
    </ScrollPanel>
  </Panel>
  <Dialog
    v-model:visible="showDeleteProject"
    modal
    :header="$t('projectsPages.edit.deleteModal.title')"
  >
    <div class="w-full flex flex-column gap-2">
      <p>{{ $t("projectsPages.edit.deleteModal.subtitle") }}</p>
      <div class="w-full flex justify-content-between gap-2">
        <Button
          :label="$t('buttons.actions.yes')"
          severity="danger"
          @click="callProjectRemoval"
        />
        <Button
          :label="$t('buttons.actions.no')"
          @click="showDeleteProject = false"
          severity="secondary"
        />
      </div>
    </div>
  </Dialog>
</template>
