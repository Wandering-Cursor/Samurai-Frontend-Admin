<script setup lang="ts">
import { searchFaculties } from "@/api/organization/faculty/searchFaculties";
import { FacultySearchRequest } from "@/api/types/organization/Faculty";
import SearchField from "@/components/Search/SearchField.vue";
import {
  AutoCompleteCompleteEvent,
  AutoCompleteItemSelectEvent,
} from "primevue/autocomplete";
import { defineProps } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const props = defineProps({
  id: {
    type: String,
    default: "faculty-search",
  },
  label: {
    type: String,
    default: "label.faculty",
  },
  placeholder: {
    type: String,
    default: "strings.facultySearchPlaceholder",
  },
  onItemSelect: {
    type: Function as unknown as () => (
      event: AutoCompleteItemSelectEvent
    ) => void,
    required: true,
  },
});

const searchMethod = (
  event: AutoCompleteCompleteEvent,
  callback: (newItems: object[]) => void
) => {
  let request = new FacultySearchRequest();
  request.name = event.query;

  searchFaculties(
    request,
    (data) => {
      callback(data.content);
    },
    (error) => {
      console.error(error);
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Failed to search faculties",
        life: 5000,
      });
    }
  );
};
</script>

<template>
  <SearchField
    :id="props.id"
    :label="props.label"
    :placeholder="props.placeholder"
    :search-method="searchMethod"
    :on-item-select="props.onItemSelect"
    :option-label="'name'"
  />
</template>
