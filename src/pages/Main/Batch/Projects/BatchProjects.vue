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
  <Panel header="Batch add Projects" class="w-full">
    <div class="flex flex-column sm:flex-row">
      <Panel header="Constructor" class="flex-grow-1 h-full">
        <Panel>
          <template #header>
            <div class="flex gap-2">
              <Button label="Add new project" @click="addProject" />
              <Button label="Submit" @click="sendBatchProjects" />
            </div>
          </template>
          <div class="flex gap-4 flex-column">
            <Panel header="Project" v-for="project in projects">
              <div class="flex gap-2 flex-column">
                <InputText v-model="project.name" placeholder="Name" />
                <InputText
                  v-model="project.description"
                  placeholder="Description"
                />
                <FacultySearchField
                  :onItemSelect="(event: AutoCompleteItemSelectEvent) => {project.faculty_id = event.value.faculty_id}"
                />
                <Panel>
                  <template #header>
                    <div class="flex gap-2">
                      <p>Tasks</p>
                      <Button
                        label="Add new task"
                        @click="() => addTask((project as BatchCreateProject).id)"
                      />
                    </div>
                  </template>
                  <div class="flex flex-column gap-2">
                    <Panel
                      header="Task"
                      v-for="task in project.tasks"
                      v-model="project.tasks"
                    >
                      <div class="flex gap-2 flex-column">
                        <InputText v-model="task.name" placeholder="Name" />
                        <InputText
                          v-model="task.description"
                          placeholder="Description"
                        />
                        <InputNumber
                          v-model="task.priority"
                          placeholder="Priority"
                        />
                        <TeacherSearchField
                          :onItemSelect="(event: AutoCompleteItemSelectEvent) => {task.reviewer = event.value.account_id}"
                        ></TeacherSearchField>
                        <Calendar
                          v-model="task.due_date"
                          placeholder="Deadline"
                        />
                        <Button
                          label="Remove task"
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
                  label="Remove project"
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
      </Panel>
    </div>
  </Panel>
</template>
