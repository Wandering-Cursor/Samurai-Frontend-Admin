<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { CreateAccountRequest } from '@/api/types/account/api/createAccount';
import { getPermissions } from '@/api/admin/getPermissions';
import { Permission } from '@/api/types/account/Permission';
import { createAccount } from '@/api/account/createAccount';
import { useToast } from 'primevue/usetoast';
import { AxiosError } from 'axios';
import { useRouter } from 'vue-router';

const accountInfo = ref<CreateAccountRequest>(new CreateAccountRequest());
const toast = useToast();
const router = useRouter();

const accountTypeOptions = ref(
    [
        { name: "Administrator", value: "admin" },
        { name: "Student", value: "student" },
        { name: "Teacher", value: "teacher" },
        { name: "Overseer", value: "overseer" },
    ]
)
const items = ref<Permission[]>([]);
const allItems = ref<Permission[]>([]);

const search = (event: any) => {
    return items.value = allItems.value.filter((item: Permission) => item.name.toLowerCase().includes(event.query.toLowerCase()));
}

onMounted(() => {
    getPermissions(
        (data: Permission[]) => {
            allItems.value = data;
        },
        (error: any) => {
            console.log(error);
        }
    );
})

const createAction = () => {
    createAccount(
        accountInfo.value,
        () => {
            router.push('/accounts');
        },
        (error: AxiosError) => {
            console.log(error);
            toast.add(
                {
                    severity: 'error',
                    summary: 'Error',
                    detail: error.message,
                    life: 3000
                }
            )
        }
    )
}
</script>

<template>
    <div class="flex flex-column">
        <h1>Create Account</h1>
        <Panel>
            <div class="flex flex-column gap-4">
                <div class="flex flex-column gap-2">
                    <label for="username">Name</label>
                    <div class="flex flex-row gap-1">
                        <InputText id="username" v-model="accountInfo.first_name" placeholder="First name" />
                        <InputText id="username" v-model="accountInfo.last_name" placeholder="Last name" />
                    </div>
                    <InputText id="username" v-model="accountInfo.middle_name" placeholder="Middle name (optional)"
                        variant="filled" />
                </div>
                <div class="flex flex-column gap-2">
                    <label for="account_type">Account type</label>
                    <Dropdown id="account_type" v-model="accountInfo.account_type" :options="accountTypeOptions"
                        optionLabel="name">
                    </Dropdown>
                </div>
                <div class="flex flex-column gap-2">
                    <label for="registration_code">Registration Code</label>
                    <InputText id="registration_code" v-model="accountInfo.registration_code"
                        placeholder="Auto-Generated" variant="filled" />
                </div>
                <div class="flex flex-column gap-2 p-fluid">
                    <label for="username">Permissions</label>
                    <AutoComplete v-model="accountInfo.permissions" optionLabel="name" multiple dropdown
                        :suggestions="items" @complete="search" />
                </div>
                <div class="flex flex-row gap-2 justify-content-center">
                    <Button label="Create" @click="createAction" />
                    <RouterLink to="/accounts">
                        <Button label="Cancel" severity="secondary" />
                    </RouterLink>
                </div>
            </div>
        </Panel>
    </div>

</template>