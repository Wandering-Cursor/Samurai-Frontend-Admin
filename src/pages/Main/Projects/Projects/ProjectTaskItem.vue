<script setup lang="ts">
import { apiClient } from "@/api/base";
import { TaskRepresentation } from "@/codegen/Api";
import { cropText } from "@/components/Utils/AddDotsToLongText";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import { useRouter } from "vue-router";

const toast = useToast();
const router = useRouter();

const props = defineProps<{
  item: TaskRepresentation;
  items: TaskRepresentation[];
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
    return "-";
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
          {{ $t("commonEntity.description") }}:
          {{ getDescription(item.description, 128) }}
        </p>
        <p>{{ $t("taskEntity.priority") }}: {{ item.priority }}</p>
        <p>
          {{ $t("taskEntity.dueDate") }}:
          {{ item.due_date || "-" }}
        </p>
        <p>
          {{ $t("taskEntity.reviewer") }}:
          {{ item.reviewer || "-" }}
        </p>
      </template>
    </Card>
    <div class="flex flex-column gap-2 sm:flex-row">
      <Button
        icon="pi pi-pencil"
        :label="$t('buttons.actions.edit')"
        @click="redirectToTaskEdit"
      />
      <Button
        icon="pi pi-trash"
        :label="$t('buttons.actions.delete')"
        @click="showDeleteTaskModal"
        severity="danger"
      />
    </div>
  </div>

  <Dialog
    :header="$t('projectsPages.tasks.deleteModal.title')"
    modal
    :visible="deleteTaskModalVisible"
  >
    <p>
      {{ $t("projectsPages.tasks.deleteModal.subtitle") }}
    </p>
    <div class="flex justify-content-between gap-2">
      <Button
        :label="$t('buttons.actions.yes')"
        severity="danger"
        @click="callDeleteTask"
      />
      <Button
        :label="$t('buttons.actions.no')"
        severity="secondary"
        @click="deleteTaskModalVisible = false"
      />
    </div>
  </Dialog>
</template>
