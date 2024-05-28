<script setup lang="ts">
import { FacultyCreateRequest } from "@/api/types/organization/Faculty";
import { onMounted, ref } from "vue";
import DepartmentSearchField from "../Search/Department/DepartmentSearchField.vue";
import { AutoCompleteItemSelectEvent } from "primevue/autocomplete";
import { Department } from "@/api/types/organization/Department";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { getFaculty } from "@/api/organization/faculty/getFaculty";
import { editFaculty } from "@/api/organization/faculty/editFaculty";

const router = useRouter();
const toast = useToast();

let facultyData = ref<FacultyCreateRequest>(new FacultyCreateRequest());

const props = defineProps({
  faculty_id: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  getFaculty(
    props.faculty_id,
    (responseData) => {
      let data = facultyData.value;

      data.name = responseData.name as string;
      data.description = responseData.description as string;
      data.department_id = responseData.department_id as string;

      facultyData.value = data;
    },
    (error) => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: error.message,
        life: 3000,
      });
      console.log(error);
    }
  );
});

const onDepartmentSelect = (event: AutoCompleteItemSelectEvent) => {
  facultyData.value.department_id = (event.value as Department).department_id;
};

const submitForm = () => {
  editFaculty(
    props.faculty_id,
    facultyData.value,
    () => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Faculty updated successfully",
        life: 3000,
      });
      router.push("/organization/faculty");
    },
    (error) => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: error.message,
        life: 5000,
      });
      console.log(error);
    }
  );
};
</script>

<template>
  <Card class="p-2 w-full">
    <template #header>
      <h3 class="text-center">
        {{ $t("facultiesPages.edit.title") }}: {{ $props.faculty_id }}
      </h3>
    </template>
    <template #content>
      <div class="p-fluid flex flex-column gap-2">
        <div class="flex gap-2">
          <InputText
            v-model="facultyData.name"
            :placeholder="$t('commonEntity.name')"
          />
          <InputText
            v-model="facultyData.description"
            :placeholder="$t('commonEntity.description')"
          />
        </div>
        <DepartmentSearchField :on-item-select="onDepartmentSelect" />
        <Button @click="submitForm" :label="$t('buttons.actions.save')" />
      </div>
    </template>
  </Card>
</template>
