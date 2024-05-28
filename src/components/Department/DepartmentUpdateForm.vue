<script setup lang="ts">
import { onMounted, ref } from "vue";
import { DepartmentUpdateRequest } from "@/api/types/organization/Department";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { getDepartment } from "@/api/organization/department/getDepartment";
import { editDepartment } from "@/api/organization/department/editDepartment";

const router = useRouter();
const toast = useToast();

let departmentData = ref<DepartmentUpdateRequest>(
  new DepartmentUpdateRequest("")
);

const props = defineProps({
  department_id: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  getDepartment(
    props.department_id,
    (responseData) => {
      let data = departmentData.value;

      data.name = responseData.name as string;
      data.description = responseData.description as string;

      departmentData.value = data;
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

const submitForm = () => {
  editDepartment(
    props.department_id,
    departmentData.value,
    () => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Department updated successfully",
        life: 3000,
      });
      router.push("/organization/department");
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
        {{ $t("departmentsPages.edit.title") }}: {{ $props.department_id }}
      </h3>
    </template>
    <template #content>
      <div class="p-fluid flex flex-column gap-2">
        <InputText
          v-model="departmentData.name"
          label="Name"
          :placeholder="$t('commonEntity.name')"
        />
        <Textarea
          v-model="departmentData.description"
          label="Description"
          :placeholder="$t('commonEntity.description')"
        />
        <Button @click="submitForm" :label="$t('buttons.actions.save')" />
      </div>
    </template>
  </Card>
</template>
