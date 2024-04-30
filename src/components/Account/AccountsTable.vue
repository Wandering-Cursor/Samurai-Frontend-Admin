<script setup lang="ts">
import { getAllAccounts } from "@/api/account/allAccounts";
import { AccountRepresentation } from "@/api/types/account/Account";
import { AllAccountsQuery, AllAccountsResponse } from "@/api/types/account/api/allAccounts";
import { Meta } from "@/api/types/common/paginatedResponse";
import { AxiosError } from "axios";
import DataTable from "primevue/datatable";
import Paginator, { PageState } from 'primevue/paginator';
import { useToast } from "primevue/usetoast";
import { onMounted } from "vue";

const toast = useToast();

const props = defineProps<{
    list: Array<AccountRepresentation>,
    metaInfo: Meta;
    pageFilters: AllAccountsQuery;
}>();

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

const gotAccounts = (data: AllAccountsResponse) => {
    props.list.splice(0, props.list.length);
    props.list.push(...data.content.map((account) => new AccountRepresentation(account)));
    props.metaInfo.fromMeta(data.meta);
};

const showError = (error: AxiosError) => {
    console.error(error);
}

const changePage = (event: PageState) => {
    props.pageFilters.page = event.page + 1;
    props.pageFilters.page_size = event.rows;
    getAllAccounts(props.pageFilters, gotAccounts, showError);
};

onMounted(() => {
    getAllAccounts(props.pageFilters, gotAccounts, showError);
});

</script>

<template>
    <DataTable :value="props.list" showGridlines stripedRows>
        <template #header>
            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                <div></div>
                <RouterLink to="/accounts/create">
                    <Button icon="pi pi-plus" v-tooltip="'Create new account'" label="New" raised link />
                </RouterLink>
            </div>
        </template>
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
                <Button v-tooltip="'Copy Account ID'" class="p-button p-button-rounded p-button-text p-button-plain"
                    @click="() => { copyToClipboard(slotProps.data.account_id) }">
                    <i class="pi pi-id-card"></i>
                </Button>
                <Button v-tooltip="'Edit Connections'" class="p-button p-button-rounded p-button-text p-button-plain"
                    @click="() => { $router.push(`/accounts/${slotProps.data.account_id}/connections`) }">
                    <i class="pi pi-link"></i>
                </Button>
                <Button v-tooltip="'Edit Permissions'" class="p-button p-button-rounded p-button-text p-button-plain"
                    @click="() => { $router.push(`/accounts/${slotProps.data.account_id}/permissions`) }">
                    <i class="pi pi-lock"></i>
                </Button>
            </template>
        </Column>
    </DataTable>
    <Paginator :rows="props.metaInfo.page_size" :totalRecords="props.metaInfo.total" v-on:page="changePage"
        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
        :rowsPerPageOptions="[1, 5, 10, 20, 30]" />
</template>