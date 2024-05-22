<script setup lang="ts">
import {
  BatchCreateProjectTask,
  BatchCreateProject as IBatchCreateProject,
} from "@/codegen/Api";
import { v4 as uuidv4 } from "uuid";
import { reactive, ref } from "vue";

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
const codeText = ref();

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
</script>

<template>
  <Panel header="Batch add Projects" class="w-full">
    <div class="flex flex-column sm:flex-row">
      <Panel header="Constructor" class="flex-grow-1 h-full">
        <Panel>
          <template #header>
            <div class="flex gap-2">
              <Button label="Add new project" @click="addProject" />
            </div>
          </template>
          <div class="flex gap-4 flex-column">
            <Panel header="Project" v-for="project in projects">
              <div class="flex gap-2 flex-column">
                <InputText placeholder="Name" />
                <InputText placeholder="Description" />
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
                    <Panel header="Task" v-for="taskProps in project.tasks">
                      <div class="flex gap-2 flex-column">
                        <InputText placeholder="Name" />
                        <InputText placeholder="Description" />
                        <InputNumber placeholder="Priority" />
                        <Button
                          label="Remove task"
                          severity="danger"
                          @click="() => {
                          const project_ent = projects.find(p => p.id === (project as BatchCreateProject).id);
                          if (project_ent) {
                            project_ent.tasks = project_ent.tasks.filter(t => t !== taskProps);
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
