<script setup lang="ts">
import { ref, onMounted } from "vue";
import { CreateAccountRequest } from "@/api/types/account/api/createAccount";
import { getPermissions } from "@/api/admin/getPermissions";
import { Permission } from "@/api/types/account/Permission";
import { createAccount } from "@/api/account/createAccount";
import { useToast } from "primevue/usetoast";
import { AxiosError } from "axios";
import { useRouter } from "vue-router";

const accountInfo = ref<CreateAccountRequest>(new CreateAccountRequest());
const toast = useToast();
const router = useRouter();

const accountTypeOptions = ref([
  { name: "Administrator", value: "admin" },
  { name: "Student", value: "student" },
  { name: "Teacher", value: "teacher" },
  { name: "Overseer", value: "overseer" },
]);
const items = ref<Permission[]>([]);
const allItems = ref<Permission[]>([]);

const search = (event: any) => {
  return (items.value = allItems.value.filter((item: Permission) =>
    item.name.toLowerCase().includes(event.query.toLowerCase())
  ));
};

onMounted(() => {
  getPermissions(
    (data: Permission[]) => {
      allItems.value = data;
    },
    (error: any) => {
      console.log(error);
    }
  );
});

const createAction = () => {
  createAccount(
    accountInfo.value,
    () => {
      router.push("/accounts");
    },
    (error: AxiosError) => {
      console.log(error);
      toast.add({
        severity: "error",
        summary: "Error",
        detail: error.message,
        life: 3000,
      });
    }
  );
};
</script>

<template>
  <div class="flex flex-column">
    <div class="flex justify-content-center">
      <h1>{{ $t("accountListPage.create") }}</h1>
    </div>
    <Panel>
      <div class="flex flex-column gap-4">
        <div class="flex flex-column gap-2">
          <label for="username">{{ $t("filters.fullName") }}</label>
          <div class="flex flex-wrap flex-row gap-1">
            <InputText
              id="firstName"
              v-model="accountInfo.first_name"
              :placeholder="$t('filters.firstName')"
              class="flex-grow-1"
            />
            <InputText
              id="lastName"
              v-model="accountInfo.last_name"
              :placeholder="$t('filters.lastName')"
              class="flex-grow-1"
            />
          </div>
          <InputText
            id="middleName"
            v-model="accountInfo.middle_name"
            :placeholder="$t('filters.middleName')"
            variant="filled"
          />
        </div>
        <div class="flex flex-column gap-2">
          <label for="account_type">{{ $t("filters.accountType") }}</label>
          <Dropdown
            id="account_type"
            v-model="accountInfo.account_type"
            :options="accountTypeOptions"
            optionLabel="name"
          />
        </div>
        <div class="flex flex-column gap-2">
          <label for="registration_code">{{
            $t("filters.registrationCode")
          }}</label>
          <InputText
            id="registration_code"
            v-model="accountInfo.registration_code"
            variant="filled"
          />
        </div>
        <div class="flex flex-column gap-2 p-fluid">
          <label for="permissions">{{ $t("filters.permissions") }}</label>
          <AutoComplete
            v-model="accountInfo.permissions"
            optionLabel="name"
            multiple
            dropdown
            :suggestions="items"
            @complete="search"
          />
        </div>
        <div class="flex flex-row gap-2 justify-content-between">
          <Button :label="$t('buttons.actions.create')" @click="createAction" />
          <RouterLink to="/accounts">
            <Button
              :label="$t('buttons.actions.cancel')"
              severity="secondary"
            />
          </RouterLink>
        </div>
      </div>
    </Panel>
  </div>
</template>
