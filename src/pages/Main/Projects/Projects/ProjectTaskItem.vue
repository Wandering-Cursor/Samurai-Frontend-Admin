<script setup lang="ts">
import { apiClient } from "@/api/base";
import { TaskModel } from "@/codegen/Api";
import { cropText } from "@/components/Utils/AddDotsToLongText";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import { useRouter } from "vue-router";

const toast = useToast();
const router = useRouter();

const props = defineProps<{
  item: TaskModel;
  items: TaskModel[];
}>();

const deleteTaskModalVisible = ref(false);

const redirectToTaskEdit = () => {
  let routeTo = router.resolve({
    name: "EditProjectTask",
    params: { projectId: props.item.project_id, taskId: props.item.task_id },
  });
  window.open(routeTo.href, "_blank");
};

const showDeleteTaskModal = () => {
  deleteTaskModalVisible.value = true;
};

const callDeleteTask = () => {
  apiClient.admin
    .deleteTaskAdminTaskTaskIdDelete(props.item.task_id as string)
    .then(() => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Task deleted successfully",
        life: 3000,
      });
      deleteTaskModalVisible.value = false;
      props.items.splice(props.items.indexOf(props.item), 1);
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

const getDescription = (
  description: string | null | undefined,
  maxLength: number
) => {
  if (!description) {
    return "No description available";
  }
  return cropText(description, maxLength);
};
</script>

<template>
  <div class="flex gap-2 flex-column sm:flex-row">
    <Card class="flex flex-column flex-grow-1">
      <template #title>
        {{ item.name }}
      </template>
      <template #subtitle>
        {{ item.task_id }}
      </template>
      <template #content>
        <p>
          Description:
          {{ getDescription(item.description, 128) }}
        </p>
        <p>Priority: {{ item.priority }}</p>
        <p>
          Due date:
          {{ item.due_date || "No due date" }}
        </p>
        <p>
          Reviewer:
          {{ item.reviewer || "No reviewer" }}
        </p>
      </template>
    </Card>
    <div class="flex flex-column gap-2 sm:flex-row">
      <Button icon="pi pi-pencil" label="Edit" @click="redirectToTaskEdit" />
      <Button
        icon="pi pi-trash"
        label="Delete"
        @click="showDeleteTaskModal"
        severity="danger"
      />
    </div>
  </div>

  <Dialog header="Delete task" modal :visible="deleteTaskModalVisible">
    <p>Are you sure you want to delete this task?</p>
    <div class="flex justify-content-between gap-2">
      <Button label="Delete" severity="danger" @click="callDeleteTask" />
      <Button
        label="Cancel"
        severity="secondary"
        @click="deleteTaskModalVisible = false"
      />
    </div>
  </Dialog>
</template>
