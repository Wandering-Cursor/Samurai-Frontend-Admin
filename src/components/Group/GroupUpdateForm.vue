<script setup lang="ts">
import { getGroup } from "@/api/organization/group/getGroup";
import { Group, UpdateGroupRequest } from "@/api/types/organization/Group";
import { useToast } from "primevue/usetoast";
import { onMounted, defineProps, ref } from "vue";
import { useRouter } from "vue-router";
import FacultySearchField from "../Search/Faculty/FacultySearchField.vue";
import { AutoCompleteItemSelectEvent } from "primevue/autocomplete";
import { updateGroup } from "@/api/organization/group/updateGroup";
import { label } from "../../i18n/translations/ua";

const router = useRouter();
const toast = useToast();

const props = defineProps({
  group_id: {
    type: String,
    required: true,
  },
});

const groupObject = ref<Group>(new Group());
const groupUpdateRequest = ref<UpdateGroupRequest>(
  new UpdateGroupRequest("", "")
);

const updateSelectedFaculty = (event: AutoCompleteItemSelectEvent) => {
  groupUpdateRequest.value.faculty_id = event.value.faculty_id;
};

const submit = () => {
  updateGroup(
    groupObject.value.group_id as string,
    groupUpdateRequest.value,
    () => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Group updated successfully",
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

onMounted(() => {
  getGroup(
    props.group_id,
    (responseData) => {
      groupObject.value = responseData;
      groupUpdateRequest.value.name = responseData.name as string;
      groupUpdateRequest.value.description = responseData.description as string;
      groupUpdateRequest.value.faculty_id = responseData.faculty_id as string;
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
</script>

<template>
  <Card class="p-2 w-full">
    <template #header>
      <h2 class="text-center">
        {{ $t("groupsPages.edit.title") }}: {{ groupObject.name }}
      </h2>
    </template>
    <template #content>
      <div class="p-fluid flex flex-column gap-2">
        <InputText
          v-model="groupUpdateRequest.name"
          :placeholder="$t('commonEntity.name')"
        />
        <Textarea
          v-model="groupUpdateRequest.description"
          :placeholder="$t('commonEntity.description')"
        />
        <FacultySearchField :onItemSelect="updateSelectedFaculty" />
        <Button @click="submit" :label="$t('buttons.actions.save')" />
      </div>
    </template>
  </Card>
</template>
