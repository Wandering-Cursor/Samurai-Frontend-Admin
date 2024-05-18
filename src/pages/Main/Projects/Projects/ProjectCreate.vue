<script setup lang="ts">
import { apiClient } from "@/api/base";
import { Faculty } from "@/api/types/organization/Faculty";
import { CreateProject as ICreateProject } from "@/codegen/Api";
import FacultySearchField from "@/components/Search/Faculty/FacultySearchField.vue";
import { AutoCompleteItemSelectEvent } from "primevue/autocomplete";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import { useRouter } from "vue-router";

class CreateProject implements ICreateProject {
  name: string = "";
  description?: string | null | undefined;
  faculty_id: string = "";
}

const router = useRouter();
const toastService = useToast();
const createProjectBody = ref<CreateProject>(new CreateProject());

const facultySelected = (event: AutoCompleteItemSelectEvent) => {
  createProjectBody.value.faculty_id = (event.value as Faculty)
    .faculty_id as string;
};

const createNewProject = () => {
  let body = createProjectBody.value;
  if (body === undefined) {
    toastService.add({
      severity: "error",
      summary: "Error",
      detail: "Please fill in all fields",
      life: 5000,
    });
    return;
  }

  apiClient.admin
    .createProjectAdminProjectPost(body)
    .then(() => {
      toastService.add({
        severity: "success",
        summary: "Success",
        detail: "Project created successfully",
        life: 3000,
      });
      router.push("/projects");
    })
    .catch((error) => {
      toastService.add({
        severity: "error",
        summary: "Error",
        detail: error.message,
        life: 5000,
      });
    });
};
</script>

<template>
  <Panel class="w-full">
    <template #header>
      <div class="w-full flex justify-content-between">
        <div class="flex align-items-center gap-2">
          <RouterLink to="/projects">
            <Button icon="pi pi-chevron-left" aria-label="Back" />
          </RouterLink>
          <p class="font-semibold text-lg">Create Project</p>
        </div>
        <div class="flex align-items-center gap-2">
          <Button icon="pi pi-save" label="Create" @click="createNewProject" />
        </div>
      </div>
    </template>
    <div class="w-full flex flex-column gap-2">
      <InputText v-model="createProjectBody.name" placeholder="Project Name" />
      <Textarea
        v-model="createProjectBody.description"
        placeholder="A description for the project"
      />
      <FacultySearchField :onItemSelect="facultySelected"></FacultySearchField>
    </div>
  </Panel>
</template>
