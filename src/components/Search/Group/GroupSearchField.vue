<script setup lang="ts">
import { searchGroups } from "@/api/organization/group/searchGroups";
import { SearchGroupsQuery } from "@/api/types/organization/Group";
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
    default: "group-search",
  },
  label: {
    type: String,
    default: "label.group",
  },
  placeholder: {
    type: String,
    default: "strings.groupSearchPlaceholder",
  },
  onItemSelect: {
    type: Function as unknown as () => (
      event: AutoCompleteItemSelectEvent
    ) => void,
    required: true,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
});

const searchMethod = (
  event: AutoCompleteCompleteEvent,
  callback: (newItems: object[]) => void
) => {
  let request = new SearchGroupsQuery();
  request.name = event.query;

  searchGroups(
    request,
    (data) => {
      callback(data.content);
    },
    (error) => {
      console.error(error);
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Failed to search groups",
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
    :multiple="props.multiple"
  />
</template>
