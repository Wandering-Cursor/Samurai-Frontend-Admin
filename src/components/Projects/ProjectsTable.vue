<script setup lang="ts">
import { ShortProjectRepresentation } from "@/codegen/Api";
import { useToast } from "primevue/usetoast";
import { copyToClipboard } from "@/components/Utils/CopyToClipboardMethod";
import { useRouter } from "vue-router";
import { PageState } from "primevue/paginator";

const router = useRouter();
const toast = useToast();

defineProps<{
  projects: {
    created_at?: string | undefined;
    updated_at?: string | undefined;
    name: string;
    description?: string | null | undefined;
    faculty_id: string;
    project_id: string;
    tasks_count: number;
    _links: Record<string, Record<string, string>>;
  }[];
  meta: { total: number; page: number; page_size: number; total_pages: number };
  onPageChange: (event: PageState) => void;
}>();
</script>

<template>
  <Panel header="Projects">
    <DataTable :value="projects" showGridlines stripedRows>
      <template #header>
        <div class="flex justify-content-end">
          <Button
            icon="pi pi-plus"
            label="New"
            @click="
              () => {
                router.push('/projects/create');
              }
            "
          />
        </div>
      </template>
      <Column field="project_id" header="Project ID">
        <template #body="slotProps">
          <p
            @click="() => { copyToClipboard((slotProps.data as ShortProjectRepresentation).project_id, toast) }"
            style="color: var(--primary-color); cursor: pointer"
          >
            ...{{
              (slotProps.data as ShortProjectRepresentation).project_id
                .split("-")
                .pop()
            }}
          </p>
        </template>
      </Column>
      <Column field="name" header="Name"></Column>
      <Column field="faculty_id" header="Faculty ID">
        <template #body="slotProps">
          <p
            @click="() => { copyToClipboard((slotProps.data as ShortProjectRepresentation).faculty_id, toast) }"
            style="color: var(--primary-color); cursor: pointer"
          >
            ...{{
              (slotProps.data as ShortProjectRepresentation).faculty_id
                .split("-")
                .pop()
            }}
          </p>
        </template>
      </Column>
      <Column field="created_at" header="Created At"></Column>
      <Column field="updated_at" header="Updated At"></Column>
      <Column header="Actions">
        <template #body="slotProps">
          <div class="flex flex-warp gap-2">
            <RouterLink
              :to="`/projects/${(slotProps.data as ShortProjectRepresentation).project_id}/edit`"
            >
              <Button icon="pi pi-pencil" label="Edit" />
            </RouterLink>
          </div>
        </template>
      </Column>
    </DataTable>
    <Paginator
      v-model:page="meta.page"
      v-model:totalRecords="meta.total"
      :rows="meta.page_size"
      @page="onPageChange"
      template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
      :rowsPerPageOptions="[1, 5, 10, 20, 30]"
    />
  </Panel>
</template>
