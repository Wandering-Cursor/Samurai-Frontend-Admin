<script setup lang="ts">
import { apiClient } from "@/api/base";
import {
  BatchCreateProjectTask,
  BatchCreateProject as IBatchCreateProject,
} from "@/codegen/Api";
import { useToast } from "primevue/usetoast";
import { v4 as uuidv4 } from "uuid";
import { reactive } from "vue";
import FacultySearchField from "@/components/Search/Faculty/FacultySearchField.vue";
import TeacherSearchField from "@/components/Search/Account/TeacherSearchField.vue";
import { AutoCompleteItemSelectEvent } from "primevue/autocomplete";
import EditorWithLabel from "@/components/EditorWithLabel.vue";

const toast = useToast();

class BatchCreateProject implements IBatchCreateProject {
  id: string;
  name: string = "";
  description: string = "";
  faculty_id: string = "";
  tasks: BatchCreateProjectTask[] = [];

  constructor() {
    this.id = uuidv4();
  }
}

const projects = reactive<BatchCreateProject[]>([]);

const addProject = () => {
  projects.push(new BatchCreateProject());
};

const addTask = (projectId: string) => {
  const project = projects.find((p) => p.id === projectId);
  if (project) {
    project.tasks.push({
      name: "",
      description: "",
      priority: 0,
    });
  }
};

const sendBatchProjects = () => {
  apiClient.admin
    .batchCreateProjectsAdminProjectBatchPost(projects)
    .then((response) => {
      console.log(response);
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Projects created successfully",
      });
      projects.splice(0, projects.length);
    })
    .catch((error) => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Failed to create projects",
      });
      console.error(error);
    });
};
</script>

<template>
  <Panel
    :header="$t('sideMenu.miscellaneousSubTopics.importProjects')"
    class="w-full"
  >
    <div class="flex flex-column gap-4">
      <div class="flex gap-4 md:flex-row sm:flex-column flex-wrap">
        <Button
          :label="$t('buttons.actions.create')"
          @click="addProject"
          icon="pi pi-plus"
        />
        <Button
          :label="$t('buttons.actions.apply')"
          @click="sendBatchProjects"
          icon="pi pi-save"
        />
      </div>
      <Panel :header="$t('entities.project.title')" v-for="project in projects">
        <div class="flex gap-2 flex-column">
          <InputText
            v-model="project.name"
            :placeholder="$t('commonEntity.name')"
          />
          <EditorWithLabel v-bind:binding="project" />
          <FacultySearchField
            :onItemSelect="(event: AutoCompleteItemSelectEvent) => {project.faculty_id = event.value.faculty_id}"
          />
          <Panel>
            <template #header>
              <div class="flex gap-2 justify-content-between w-full">
                <p>{{ $t("projectsPages.tasks.list") }}</p>
                <Button
                  :label="$t('buttons.actions.create')"
                  icon="pi pi-plus"
                  @click="() => addTask((project as BatchCreateProject).id)"
                />
              </div>
            </template>
            <div class="flex flex-column gap-2">
              <Panel
                :header="$t('entities.task.title')"
                v-for="task in project.tasks"
                v-model="project.tasks"
              >
                <div class="flex gap-2 flex-column">
                  <InputText
                    v-model="task.name"
                    placeholder="Створити файл..."
                  />
                  <EditorWithLabel v-bind:binding="task" />
                  <div class="flex w-full flex-column gap-2">
                    <label for="task-priority">{{
                      $t("filters.priority")
                    }}</label>
                    <InputNumber
                      id="task-priority"
                      v-model="task.priority"
                      showButtons
                      :placeholder="$t('filters.priority')"
                    />
                  </div>
                  <TeacherSearchField
                    :onItemSelect="(event: AutoCompleteItemSelectEvent) => {task.reviewer = event.value.account_id}"
                  ></TeacherSearchField>
                  <Calendar
                    :placeholder="$t('strings.dueDate')"
                    @date-select="(value: Date) => {task.due_date = value.toISOString()}"
                  />
                  <Button
                    :label="$t('buttons.actions.delete')"
                    severity="danger"
                    @click="() => {
                        const project_ent = projects.find(p => p.id === (project as BatchCreateProject).id);
                        if (project_ent) {
                          project_ent.tasks = project_ent.tasks.filter(t => t !== task);
                        }
                      }"
                  />
                </div>
              </Panel>
            </div>
          </Panel>
          <Button
            :label="$t('buttons.actions.delete')"
            severity="danger"
            @click="
              () =>
                projects.splice(
                  projects.findIndex((p) => p === project),
                  1
                )
            "
          />
        </div>
      </Panel>
    </div>
  </Panel>
</template>
