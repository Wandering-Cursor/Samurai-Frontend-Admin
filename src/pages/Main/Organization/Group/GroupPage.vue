<script setup lang="ts">
import { getGroup } from '@/api/organization/group/getGroup';
import { Group } from '@/api/types/organization/Group';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const groupId = route.params.id as string;
const groupEntity = ref<Group>();

onMounted(() => {
    getGroup(
        groupId,
        (data) => {
            groupEntity.value = data;
        },
        (error) => {
            console.error(error);
        }
    );
});

</script>

<template>

    <Panel class="w-full">
        <Fieldset toggleable legend="Name">
            <p>{{ groupEntity?.name }}</p>
        </Fieldset>
        <Fieldset toggleable legend="Description">
            <p>{{ groupEntity?.description }}</p>
        </Fieldset>
        <Fieldset toggleable legend="Faculty">
            <div class="flex flex-row gap-2">
                <p>{{ groupEntity?.faculty_id }}</p>
                <RouterLink :to="`/organization/faculty/${groupEntity?.faculty_id}`">
                    <Button icon="pi pi-eye" class="p-button-text" />
                </RouterLink>
            </div>
        </Fieldset>
        <Fieldset toggleable legend="Date info">
            <p> Created at: {{ groupEntity?.created_at }}</p>
            <p> Updated at: {{ groupEntity?.updated_at }}</p>
        </Fieldset>
    </Panel>

</template>