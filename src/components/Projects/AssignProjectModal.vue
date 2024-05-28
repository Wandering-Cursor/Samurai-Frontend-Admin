<script setup lang="ts">
import { AutoCompleteItemSelectEvent } from "primevue/autocomplete";
import GroupSearchField from "../Search/Group/GroupSearchField.vue";
import StudentsSearchField from "../Search/Account/StudentsSearchField.vue";
import { apiClient } from "@/api/base";
import {
  Group,
  ProjectAssignBody as IProjectAssignBody,
  VerboseAccountRepresentation,
} from "@/codegen/Api";
import { inject, onMounted, Ref, ref } from "vue";
import { useToast } from "primevue/usetoast";

class ProjectAssignBody implements IProjectAssignBody {
  students_ids?: string[] | null;
  group_ids?: string[] | null;
  teachers_ids?: string[] | null;
}

const toast = useToast();
const dialogRef =
  inject<Ref<{ data: { assignProjectProjectId: String }; close: Function }>>(
    "dialogRef"
  );
let params = ref<{ assignProjectProjectId: String }>({
  assignProjectProjectId: "",
});

onMounted(() => {
  if (dialogRef === undefined) {
    return;
  }
  params.value = dialogRef.value.data;
});

const projectAssignData = ref<ProjectAssignBody>(new ProjectAssignBody());

const groupSelected = (event: AutoCompleteItemSelectEvent) => {
  projectAssignData.value.group_ids = event.value.map(
    (group: Group) => group.group_id
  );
};
const studentsSelected = (event: AutoCompleteItemSelectEvent) => {
  projectAssignData.value.students_ids = event.value.map(
    (student: VerboseAccountRepresentation) => student.account_id
  );
};
const teacherSelected = (event: AutoCompleteItemSelectEvent) => {
  projectAssignData.value.teachers_ids = event.value.map(
    (teacher: VerboseAccountRepresentation) => teacher.account_id
  );
};

const assignProject = () => {
  apiClient.admin
    .assignProjectAdminProjectProjectIdAssignPost(
      params.value.assignProjectProjectId as string,
      projectAssignData.value
    )
    .then(() => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Project assigned",
        life: 5000,
      });
      dialogRef?.value.close();
    })
    .catch((error) => {
      console.error(error);
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Failed to assign project",
        life: 5000,
      });
    });
};
</script>

<template>
  <div class="flex flex-column gap-2">
    <p>{{ $t("projectsPages.list.modal.subtitle") }}</p>
    <GroupSearchField :on-item-select="groupSelected" :multiple="true" />
    <StudentsSearchField :on-item-select="studentsSelected" :multiple="true" />
    <TeacherSearchField :on-item-select="teacherSelected" :multiple="true" />
    <Button :label="$t('buttons.actions.apply')" @click="assignProject" />
  </div>
</template>
