<script setup lang="ts">
import { ref } from "vue";
import { CreateGroupRequest } from "@/api/types/organization/Group";
import FacultySearchField from "../Search/Faculty/FacultySearchField.vue";
import { AutoCompleteItemSelectEvent } from "primevue/autocomplete";
import { createGroup } from "@/api/organization/group/createGroup";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";

const router = useRouter();
const toast = useToast();

const groupInfo = ref(new CreateGroupRequest("", ""));

const facultySelected = (event: AutoCompleteItemSelectEvent) => {
  groupInfo.value.faculty_id = event.value.faculty_id;
};

const submit = () => {
  if (!groupInfo.value.isValid()) {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: "Please fill all the required fields",
      life: 5000,
    });
    return;
  }

  createGroup(
    groupInfo.value,
    () => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Group created successfully",
        life: 3000,
      });
      router.push("/organization/group");
    },
    (error) => {
      console.log(error);
      toast.add({
        severity: "error",
        summary: "Error",
        detail: error.message,
        life: 5000,
      });
    }
  );
};
</script>

<template>
  <Card class="p-2 w-full">
    <template #header>
      <h2 class="text-center">{{ $t("groupsPages.create.title") }}</h2>
    </template>
    <template #content>
      <div class="p-fluid flex flex-column gap-2">
        <InputText
          v-model="groupInfo.name"
          :placeholder="$t('commonEntity.name')"
        />
        <Textarea
          v-model="groupInfo.description"
          :placeholder="$t('commonEntity.description')"
        />
        <FacultySearchField :onItemSelect="facultySelected" />
        <Button @click="submit" :label="$t('buttons.actions.create')" />
      </div>
    </template>
  </Card>
</template>
