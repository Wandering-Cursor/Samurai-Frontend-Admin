<script setup lang="ts">
import { getAllAccounts } from "@/api/account/allAccounts";
import { AccountRepresentation } from "@/api/types/account/Account";
import { AllAccountsQuery, AllAccountsResponse } from "@/api/types/account/api/allAccounts";
import { Meta } from "@/api/types/common/Pagination";
import { AxiosError } from "axios";
import DataTable from "primevue/datatable";
import Paginator, { PageState } from 'primevue/paginator';
import { onMounted } from "vue";
import CopyToClipboard from "../Visuals/CopyToClipboard.vue";


const props = defineProps<{
    list: AccountRepresentation[];
    metaInfo: Meta;
    pageFilters: AllAccountsQuery;
}>();

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
                <div class="flex flex-wrap gap-2">
                    <CopyToClipboard :data="slotProps.data.account_id" tooltip="Copy Account ID" icon="pi pi-id-card" />
                    <Button v-tooltip="'Edit Connections'" class="p-button" icon="pi pi-link"
                        @click="() => { $router.push(`/accounts/${slotProps.data.account_id}/connections`) }" />
                    <Button v-tooltip="'Edit Permissions'" class="p-button"
                        @click="() => { $router.push(`/accounts/${slotProps.data.account_id}/permissions`) }"
                        icon="pi pi-lock" />
                </div>
            </template>
        </Column>
    </DataTable>
    <Paginator :rows="props.metaInfo.page_size" :totalRecords="props.metaInfo.total" v-on:page="changePage"
        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
        :rowsPerPageOptions="[1, 5, 10, 20, 30]" />
</template>