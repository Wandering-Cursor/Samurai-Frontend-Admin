<script setup lang="ts">
import { ref } from "vue";
import { DepartmentCreateRequest } from "@/api/types/organization/Department";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { createDepartment } from "@/api/organization/department/createDepartment";

const router = useRouter();
const toast = useToast();

let departmentData = ref<DepartmentCreateRequest>(
  new DepartmentCreateRequest("")
);

const submitForm = () => {
  createDepartment(
    departmentData.value,
    () => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Department created successfully",
        life: 3000,
      });
      router.push("/organization/department");
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
};
</script>

<template>
  <Card class="p-2 w-full">
    <template #header>
      <h2 class="text-center">{{ $t("departmentsPages.create.title") }}</h2>
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
        <Button @click="submitForm" :label="$t('buttons.actions.create')" />
      </div>
    </template>
  </Card>
</template>
