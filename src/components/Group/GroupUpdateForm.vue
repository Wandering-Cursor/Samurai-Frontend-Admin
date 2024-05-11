<script setup lang="ts">

import { getGroup } from '@/api/organization/group/getGroup';
import { Group, UpdateGroupRequest } from '@/api/types/organization/Group';
import { useToast } from 'primevue/usetoast';
import { onMounted, defineProps, ref } from 'vue';
import { useRouter } from 'vue-router';
import FacultySearchField from '../Search/Faculty/FacultySearchField.vue';
import { AutoCompleteItemSelectEvent } from 'primevue/autocomplete';
import { updateGroup } from '@/api/organization/group/updateGroup';


const router = useRouter();
const toast = useToast();

const props = defineProps({
    group_id: {
        type: String,
        required: true
    }
});

const groupObject = ref<Group>(new Group());
const groupUpdateRequest = ref<UpdateGroupRequest>(new UpdateGroupRequest("", ""));

const updateSelectedFaculty = (event: AutoCompleteItemSelectEvent) => {
    groupUpdateRequest.value.faculty_id = event.value.faculty_id;
};

const submit = () => {
    if (!groupUpdateRequest.value.isValid()) {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Please fill all the required fields', life: 5000 });
        return;
    }

    updateGroup(
        groupObject.value.group_id as string,
        groupUpdateRequest.value,
        () => {
            toast.add({ severity: 'success', summary: 'Success', detail: 'Group updated successfully', life: 3000 });
            router.push("/organization/group");
        },
        (error) => {
            console.log(error);
            toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 5000 });
        }
    )

}

onMounted(() => {
    getGroup(
        props.group_id,
        (responseData) => {
            groupObject.value = responseData;
            groupUpdateRequest.value.name = responseData.name as string;
            groupUpdateRequest.value.description = responseData.description as string;
        },
        (error) => {
            toast.add(
                {
                    severity: 'error',
                    summary: 'Error',
                    detail: error.message,
                    life: 3000
                }
            );
            console.log(error);
        }
    )
})

</script>

<template>

    <Card>
        <template #header>
            <h2 class="text-center">Group: {{ groupObject.name }}</h2>
        </template>
        <template #content>
            <div class="p-fluid flex flex-column gap-2">
                <InputText v-model="groupUpdateRequest.name" label="Name" placeholder="Enter group name" />
                <Textarea v-model="groupUpdateRequest.description" label="Description"
                    placeholder="Enter group description (optional)" />
                <FacultySearchField :onItemSelect="updateSelectedFaculty" />
                <Button @click="submit" label="Save" />
            </div>
        </template>
    </Card>

</template>