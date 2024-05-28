<script setup lang="ts">
import { useRouter } from "vue-router";
import { ProjectRepresentation as IProjectRepresentation } from "@/codegen/Api";
import ProjectTaskItem from "./ProjectTaskItem.vue";

const router = useRouter();

const props = defineProps<{
  projectEntity: IProjectRepresentation;
}>();

const openAddTaskTab = () => {
  let routeTo = router.resolve({
    name: "AddProjectTask",
    params: { projectId: props.projectEntity.project_id },
  });
  window.open(routeTo.href, "_blank");
};
</script>

<template>
  <DataView :value="projectEntity.tasks" data-key="task_id">
    <template #header>
      <div class="w-full flex justify-content-between align-items-center">
        <div class="flex gap-2">{{ $t("projectsPages.tasks.list") }}</div>
        <div class="flex gap-2">
          <Button
            icon="pi pi-plus"
            :label="$t('buttons.actions.create')"
            @click="openAddTaskTab"
          />
        </div>
      </div>
    </template>
    <template #list="slotProps">
      <ScrollPanel style="max-height: 50vh">
        <div class="flex flex-column gap-4 p-2">
          <ProjectTaskItem
            v-for="(item, index) in slotProps.items"
            :key="index"
            :item="item"
            :items="projectEntity.tasks"
          />
        </div>
      </ScrollPanel>
    </template>
  </DataView>
</template>
