<script setup lang="ts">
import { getAllAccounts } from "@/api/account/allAccounts";
import { AllAccountsQuery, AllAccountsResponse } from "@/api/types/account/allAccounts";
import { SearchFilter } from "@/api/types/common/Search";
import FilterPanel from "@/components/Search/FilterPanel/FilterPanel.vue";
import DataTable from "primevue/datatable";
import { AxiosError } from 'axios';
import { Ref, ref } from 'vue';
import Paginator, { PageState } from 'primevue/paginator';
import { AccountRepresentation } from "@/api/types/account/Account";
import { Meta } from "@/api/types/common/paginatedResponse";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";


let list: Ref<Array<AccountRepresentation>> = ref([]);
let metaInfo: Ref<Meta> = ref(new Meta());
let pageFilters: Ref<AllAccountsQuery> = ref(new AllAccountsQuery(1, 10, {}));

const toast = useToast();

const showError = (error: AxiosError) => {
    console.error(error);
}

const gotAccounts = (data: AllAccountsResponse) => {
    list.value = [];
    list.value.push(...data.content.map((account) => new AccountRepresentation(account)));
    metaInfo.value = data.meta;
};

const onLoad = () => {
    getAllAccounts(pageFilters.value, gotAccounts, showError);
};

const onFilter = (filters: { [key: string]: any }) => {
    pageFilters.value = new AllAccountsQuery(pageFilters.value.page, pageFilters.value.page_size, filters);
    getAllAccounts(pageFilters.value, gotAccounts, showError);
};

const changePage = (event: PageState) => {
    pageFilters.value.page = event.page + 1;
    pageFilters.value.page_size = event.rows;
    getAllAccounts(pageFilters.value, gotAccounts, showError);
};

const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value).then(() => {
        toast.add(
            {
                severity: 'success',
                summary: 'Success',
                detail: 'Copied to clipboard',
                life: 1000
            }
        );
    }).catch(err => {
        toast.add(
            {
                severity: 'error',
                summary: 'Error',
                detail: 'Could not copy text',
                life: 2000
            }
        );
        console.error(err);
    });
}

onLoad();

const filters: SearchFilter[] = [
    {
        title: "Account ID",
        propertyName: "account_id",
        placeholder: "0399b33d-4c87-485a-8257-18a0fb7c8c7c",
    },
    {
        title: "Email",
        propertyName: "email",
        placeholder: "user@mail.com",
    },
    {
        title: "Username",
        propertyName: "username",
        placeholder: "username",
    },
    {
        title: "Account Type",
        propertyName: "account_type",
        options: [
            {
                visibleName: "Admin",
                value: "admin"
            },
            {
                visibleName: "Student",
                value: "student"
            },
            {
                visibleName: "Teacher",
                value: "teacher"
            },
            {
                visibleName: "Overseer",
                value: "overseer"
            },
            {
                visibleName: "Clear",
                value: undefined,
            }
        ],
        placeholder: "Select an option"
    },
    {
        title: "Registration Code",
        propertyName: "registration_code",
        placeholder: "student_12345",
    }
];

</script>

<template>
    <Toast />
    <div class="grid w-full m-1">
        <div class="col">
            <div>
                <p class="text-4xl font-bold text-center">Accounts Control</p>
            </div>
            <div>
                <DataTable :value="list" showGridlines stripedRows>
                    <Column key="email" field="email" header="Email">
                        <template #body="slotProps">
                            <RouterLink :to="`/accounts/${slotProps.data.account_id}`">
                                <Button :to="`/accounts/${slotProps.data.account_id}`" link>
                                    {{ slotProps.data.email }}
                                </Button>
                            </RouterLink>
                        </template>
                    </Column>
                    <Column key="first_name" field="first_name" header="First Name"></Column>
                    <Column key="last_name" field="last_name" header="Last Name"></Column>
                    <Column key="account_type" field="account_type" header="Account Type"></Column>
                    <Column header="Actions">
                        <template #body="slotProps">
                            <Button v-tooltip="'Copy Account ID'"
                                class="p-button p-button-rounded p-button-text p-button-plain"
                                @click="() => { copyToClipboard(slotProps.data.account_id) }">
                                <i class="pi pi-id-card"></i>
                            </Button>
                        </template>
                    </Column>
                </DataTable>
                <Paginator :rows="metaInfo.page_size" :totalRecords="metaInfo.total" v-on:page="changePage"
                    template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
                    :rowsPerPageOptions="[1, 5, 10, 20, 30]" />
            </div>
        </div>
        <div class="col-2">
            <FilterPanel :filters="filters" :filterHandler="onFilter" :search-name="'Accounts'" />
        </div>
    </div>
</template>
