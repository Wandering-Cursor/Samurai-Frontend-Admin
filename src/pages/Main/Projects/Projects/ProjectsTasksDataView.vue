<script setup lang="ts">
import { useRouter } from "vue-router";
import ProjectTaskItem from "./ProjectTaskItem.vue";

const router = useRouter();

const props = defineProps<{
  projectEntity: {
    created_at?: string | undefined;
    updated_at?: string | undefined;
    name: string;
    description?: string | null | undefined;
    faculty_id: string;
    project_id: string;
    tasks: {
      created_at?: string | undefined;
      updated_at?: string | undefined;
      name: string;
      description?: string | null | undefined;
      priority?: number | undefined;
      reviewer?: string | null | undefined;
      due_date?: string | null | undefined;
      project_id: string;
      task_id?: string | undefined;
    }[];
    tasks_count: number;
    _links: Record<string, Record<string, string>>;
  };
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
        <div class="flex gap-2">List of Tasks</div>
        <div class="flex gap-2">
          <Button icon="pi pi-plus" label="Add task" @click="openAddTaskTab" />
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
