<script setup lang="ts">
import { useRoute } from "vue-router";
import {
  CreateTask as ICreateTask,
  VerboseAccountRepresentation,
} from "@/codegen/Api";
import { onMounted, ref } from "vue";
import { AutoCompleteItemSelectEvent } from "primevue/autocomplete";
import TeacherSearchField from "@/components/Search/Account/TeacherSearchField.vue";
import { apiClient } from "@/api/base";
import { useToast } from "primevue/usetoast";

const route = useRoute();
const toast = useToast();

const taskId = ref("");

class CreateTask implements ICreateTask {
  name: string = "";
  description?: string | null | undefined;
  priority: number | undefined = undefined;
  reviewer?: string | null | undefined;
  due_date?: string | null | undefined;
  project_id: string = "";

  due_date_handler: Date | null = null;
}

const editTask = ref<CreateTask>(new CreateTask());

const setDueDate = (value: Date | any) => {
  editTask.value.due_date = value.toISOString();
};
const selectReviewer = (event: AutoCompleteItemSelectEvent) => {
  editTask.value.reviewer = (event.value as VerboseAccountRepresentation)
    .account_id as string;
};

const saveTask = () => {
  apiClient.admin
    .updateTaskAdminTaskTaskIdPut(taskId.value, editTask.value)
    .then(() => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Task created successfully",
        life: 3000,
      });
      window.close();
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
  taskId.value = route.params.taskId as string;
  apiClient.admin.getTaskAdminTaskTaskIdGet(taskId.value).then((response) => {
    let value = new CreateTask();
    Object.assign(value, response.data);
    editTask.value = value;
  });
});

const closePage = () => {
  window.close();
};
</script>

<template>
  <Panel class="w-full">
    <template #header>
      <div class="w-full flex justify-content-between flex-wrap">
        <div class="flex align-items-center gap-2">
          <Button
            icon="pi pi-chevron-left"
            aria-label="Leave page"
            @click="closePage"
          />
          <p class="font-semibold text-lg">
            {{ $t("projectsPages.tasks.edit") }}: {{ editTask.name }} ({{
              taskId
            }})
          </p>
        </div>
        <div class="flex align-items-center gap-2">
          <Button
            icon="pi pi-save"
            :label="$t('buttons.actions.save')"
            @click="saveTask"
          />
        </div>
      </div>
    </template>
    <div class="flex justify-content-center flex-wrap">
      <Panel class="w-full">
        <div class="flex flex-column gap-4">
          <InputText v-model="editTask.name" placeholder="Створити файл..." />
          <EditorWithLabel v-bind:binding="editTask" />
          <div class="flex w-full flex-column gap-2">
            <label for="task-priority">{{ $t("filters.priority") }}</label>
            <InputNumber
              id="task-priority"
              v-model="editTask.priority"
              showButtons
              :placeholder="$t('filters.priority')"
            />
          </div>
          <TeacherSearchField
            id="task-reviewer"
            label="strings.taskReviewer"
            placeholder="strings.taskReviewer"
            :onItemSelect="selectReviewer"
          />
          <Calendar
            v-model="editTask.due_date_handler"
            :placeholder="$t('strings.dueDate')"
            :min-date="new Date()"
            showIcon
            @update:model-value="setDueDate"
          />
        </div>
      </Panel>
    </div>
  </Panel>
</template>
