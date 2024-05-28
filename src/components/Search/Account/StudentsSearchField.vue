<script setup lang="ts">
import SearchField from "@/components/Search/SearchField.vue";
import {
  AutoCompleteCompleteEvent,
  AutoCompleteItemSelectEvent,
} from "primevue/autocomplete";
import { defineProps } from "vue";
import { useToast } from "primevue/usetoast";
import { apiClient } from "@/api/base";
import { AccountType } from "@/codegen/Api";

const toast = useToast();

const props = defineProps({
  id: {
    type: String,
    default: "student-search",
  },
  label: {
    type: String,
    default: "label.student",
  },
  placeholder: {
    type: String,
    default: "strings.userSearchPlaceholder",
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
  apiClient.admin
    .getAllAccountsAdminAccountGet({
      email: event.query,
      username: event.query,
      account_type: AccountType.Student,
      page_size: 10,
      page: 1,
    })
    .then((response) => {
      callback(response.data.content);
    })
    .catch((error) => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: `Failed to search for accounts: ${error}`,
      });
    });
};
</script>

<template>
  <SearchField
    :id="props.id"
    :label="props.label"
    :placeholder="props.placeholder"
    :search-method="searchMethod"
    :on-item-select="props.onItemSelect"
    :option-label="'email'"
    :multiple="props.multiple"
  />
</template>
