<script setup lang="ts">
import { FacultyCreateRequest } from '@/api/types/organization/Faculty';
import { ref } from 'vue';
import DepartmentSearchField from '../Search/Department/DepartmentSearchField.vue';
import { AutoCompleteItemSelectEvent } from 'primevue/autocomplete';
import Department from '@/api/types/organization/Department';
import { createFaculty } from '@/api/organization/faculty/createFaculty';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';

const router = useRouter();
const toast = useToast();

let facultyData = ref<FacultyCreateRequest>(new FacultyCreateRequest());


const onDepartmentSelect = (event: AutoCompleteItemSelectEvent) => {
    facultyData.value.department_id = (event.value as Department).department_id;
}

const submitForm = () => {
    createFaculty(
        facultyData.value,
        () => {
            toast.add({ severity: 'success', summary: 'Success', detail: 'Faculty created successfully', life: 3000 });
            router.push("/organization/faculty");
        },
        (error) => {
            toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
            console.log(error);
        }
    )
}

</script>

<template>
    <Card>
        <template #header>
            <h2 class="text-center">Faculty</h2>
        </template>
        <template #content>
            <div class="p-fluid flex flex-column gap-2">
                <div class="flex gap-2">
                    <InputText v-model="facultyData.name" label="Name" placeholder="Enter faculty name" />
                    <InputText v-model="facultyData.description" label="Description"
                        placeholder="Enter faculty description" />
                </div>
                <DepartmentSearchField :on-item-select="onDepartmentSelect" label="Department" />
                <Button @click="submitForm" label="Submit" />
            </div>
        </template>
    </Card>
</template>