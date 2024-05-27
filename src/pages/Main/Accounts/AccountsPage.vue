<script setup lang="ts">
import { getAllAccounts } from "@/api/account/allAccounts";
import {
  AllAccountsQuery,
  AllAccountsResponse,
} from "@/api/types/account/api/allAccounts";
import { SearchFilter } from "@/api/types/common/Search";
import FilterPanel from "@/components/Search/FilterPanel/FilterPanel.vue";
import { AxiosError } from "axios";
import { Ref, ref } from "vue";
import { AccountRepresentation } from "@/api/types/account/Account";
import { Meta } from "@/api/types/common/Pagination";
import AccountsTable from "@/components/Account/AccountsTable.vue";

let list: Ref<Array<AccountRepresentation>> = ref([]);
let metaInfo: Ref<Meta> = ref(new Meta());
let pageFilters: Ref<AllAccountsQuery> = ref(new AllAccountsQuery(1, 10, {}));

const showError = (error: AxiosError) => {
  console.error(error);
};

const gotAccounts = (data: AllAccountsResponse) => {
  list.value = [];
  list.value.push(
    ...data.content.map((account) => new AccountRepresentation(account))
  );
  metaInfo.value = data.meta;
};

const onFilter = (filters: { [key: string]: any }) => {
  pageFilters.value = new AllAccountsQuery(
    pageFilters.value.page,
    pageFilters.value.page_size,
    filters
  );
  getAllAccounts(pageFilters.value, gotAccounts, showError);
};

const filters: SearchFilter[] = [
  {
    title: "filters.accountID",
    propertyName: "account_id",
    placeholder: "0399b33d-4c87-485a-8257-18a0fb7c8c7c",
  },
  {
    title: "filters.email",
    propertyName: "email",
    placeholder: "user@mail.com",
  },
  {
    title: "filters.username",
    propertyName: "username",
    placeholder: "username",
  },
  {
    title: "filters.accountType",
    propertyName: "account_type",
    options: [
      {
        visibleName: "Admin",
        value: "admin",
      },
      {
        visibleName: "Student",
        value: "student",
      },
      {
        visibleName: "Teacher",
        value: "teacher",
      },
      {
        visibleName: "Overseer",
        value: "overseer",
      },
      {
        visibleName: "Clear",
        value: undefined,
      },
    ],
    placeholder: "Select an option",
  },
  {
    title: "filters.registrationCode",
    propertyName: "registration_code",
    placeholder: "student_12345",
  },
];
</script>

<template>
  <div class="grid w-full m-1">
    <div class="col">
      <div>
        <p class="text-4xl font-bold text-center">
          {{ $t("accountListPage.title") }}
        </p>
      </div>
      <div>
        <AccountsTable
          :list="list"
          :metaInfo="metaInfo"
          :pageFilters="pageFilters"
        >
        </AccountsTable>
      </div>
    </div>
    <div class="col-2">
      <FilterPanel
        :filters="filters"
        :filterHandler="onFilter"
        :search-name="$t('filters.accountSearchName')"
      />
    </div>
  </div>
</template>
