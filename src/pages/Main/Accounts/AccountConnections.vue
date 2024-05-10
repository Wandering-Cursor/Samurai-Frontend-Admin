<script setup lang="ts">
import { getAccount } from '@/api/account/getAccount';
import { AccountInfo } from '@/api/types/account/Account';
import { Connection, CreateConnection, SetAccountConnections } from '@/api/types/account/Connection';
import { GetAccountRequest } from '@/api/types/account/api/getAccount';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { AutoCompleteItemSelectEvent } from 'primevue/autocomplete';
import DepartmentSearchField from '@/components/Search/Department/DepartmentSearchField.vue';
import FacultySearchField from '@/components/Search/Faculty/FacultySearchField.vue';
import { Department } from '@/api/types/organization/Department';
import { Faculty } from '@/api/types/organization/Faculty';
import GroupSearchField from '@/components/Search/Group/GroupSearchField.vue';
import Group from '@/api/types/organization/Group';
import createConnection from '@/api/organization/connection/createConnection';
import { setConnections } from '@/api/account/setConnections';

const route = useRoute();
const toast = useToast();

let accountInfo = ref<AccountInfo | null>(null);
let allConnections = ref<Connection[]>([]);

let createConnectionDialogVisible = ref(false);
let selectedDepartment = ref<Department | null>(null);
let selectedFaculty = ref<Faculty | null>(null);
let selectedGroup = ref<Group | null>(null);

const removeItem = (connectionId: string) => {
    allConnections.value = allConnections.value.filter((connection) => connection.connection_id !== connectionId);
}

const fetchAccount = () => {
    getAccount(
        new GetAccountRequest(route.params.id as string),
        (response) => {
            accountInfo.value = response;
            allConnections.value = accountInfo.value.connections;
        },
        (error) => {
            console.error(error);
            toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to get account info', life: 5000 });
        }

    )
}

onMounted(
    () => {
        fetchAccount();
    }
)


const createConnectionClick = () => {
    let con = new CreateConnection();
    con.department_id = selectedDepartment.value?.department_id;
    con.faculty_id = selectedFaculty.value?.faculty_id;
    con.group_id = selectedGroup.value?.group_id;

    createConnection(
        con,
        (response) => {
            allConnections.value.push(response);
            createConnectionDialogVisible.value = false;
        },
        (error) => {
            console.error(error);
            toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to create connection', life: 5000 });
        }
    )
}

const saveAccountConnections = () => {
    let setAccountConnectionsData = new SetAccountConnections(
        allConnections.value.map((connection) => connection.connection_id)
    );

    setConnections(
        accountInfo.value?.account_id as string,
        setAccountConnectionsData,
        () => {
            toast.add({ severity: 'success', summary: 'Success', detail: 'Connections saved', life: 3000 });
            fetchAccount();
        },
        (error) => {
            console.error(error);
            toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to save connections', life: 5000 });
        }
    )

}


</script>

<template>
    <Panel class="w-full">
        <Menubar>
            <template #start>
                <p>Connections of {{ accountInfo?.email }}</p>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <Button v-tooltip.left="'Add new connection'" icon="pi pi-plus" class="p-button-rounded"
                        @click="createConnectionDialogVisible = true" />
                    <Button v-tooltip.left="'Save connections'" icon="pi pi-save" class="p-button-rounded"
                        @click="saveAccountConnections" />
                </div>
            </template>
        </Menubar>
        <Panel header="Connections List">
            <div class="flex flex-column gap-4">
                <Card v-for="connection in allConnections" :key="connection.connection_id">
                    <template #header>
                        <div class="text-center">
                            <h3>Connection - {{ connection.connection_id }}</h3>
                        </div>
                    </template>
                    <template #content>
                        <div>
                            <p>Department - {{ connection.department_id }}</p>
                            <p>Faculty - {{ connection.faculty_id }}</p>
                            <p>Group - {{ connection.group_id }}</p>
                        </div>
                    </template>
                    <template #footer>
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-danger"
                            @click="removeItem(connection.connection_id)" />
                    </template>
                </Card>
            </div>
        </Panel>
    </Panel>


    <Dialog v-model:visible="createConnectionDialogVisible" modal header="Create connection" :style="{ width: '50%' }">
        <span class="p-text-secondary block mb-5">Add new connection for {{ accountInfo?.email }}</span>
        <div class="flex flex-column gap-2">
            <DepartmentSearchField
                :onItemSelect="(event: AutoCompleteItemSelectEvent) => { selectedDepartment = event.value; }" />
            <FacultySearchField
                :onItemSelect="(event: AutoCompleteItemSelectEvent) => { selectedFaculty = event.value }" />
            <GroupSearchField
                :on-item-select="(event: AutoCompleteItemSelectEvent) => { selectedGroup = event.value }" />
            <Divider />
            <Button label="Create" icon="pi pi-check" @click="createConnectionClick" />
        </div>
    </Dialog>
</template>