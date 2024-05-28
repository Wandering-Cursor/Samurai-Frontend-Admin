<script setup lang="ts">
import {
  AutoCompleteCompleteEvent,
  AutoCompleteItemSelectEvent,
} from "primevue/autocomplete";
import { defineProps, ref } from "vue";

const props = defineProps({
  id: String,
  label: String,
  placeholder: {
    type: String,
    default: "",
  },
  optionLabel: {
    type: String as unknown as () => string | ((item: object) => string),
    default: "name",
  },
  searchMethod: {
    type: Function as unknown as () => (
      event: AutoCompleteCompleteEvent,
      callback: (newItems: object[]) => void
    ) => void,
    required: true,
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

const value = ref<object>();
const items = ref<object[]>([]);

const setItemsCallback = (newItems: object[]) => {
  items.value = newItems;
};
</script>

<template>
  <div class="flex align-items-center gap-2 mb-2">
    <label :for="props.id" class="font-semibold w-6rem">{{
      $t(props.label as string)
    }}</label>
    <AutoComplete
      :id="props.id"
      v-model="value"
      :suggestions="items"
      class="flex-auto"
      :placeholder="$t(props.placeholder)"
      @complete="(event: AutoCompleteCompleteEvent) => searchMethod(event, setItemsCallback)"
      :option-label="props.optionLabel"
      dropdown
      :multiple="props.multiple"
      v-on:change="onItemSelect"
    >
    </AutoComplete>
  </div>
</template>
