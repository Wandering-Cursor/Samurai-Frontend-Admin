<script setup lang="ts">
import { reactive, ref } from "vue";
import {
  AccountBatchCreateInput,
  AccountCreateConnectionForBatch,
  AccountType,
  AccountCreateInputForBatch as IAccountCreateInputForBatch,
} from "@/codegen/Api";
import GroupSearchField from "@/components/Search/Group/GroupSearchField.vue";
import FacultySearchField from "@/components/Search/Faculty/FacultySearchField.vue";
import DepartmentSearchField from "@/components/Search/Department/DepartmentSearchField.vue";
import PermissionsSearchField from "@/components/Search/Permissions/PermissionsSearchField.vue";
import { AutoCompleteItemSelectEvent } from "primevue/autocomplete";
import { Permission } from "@/api/types/account/Permission";
import { apiClient } from "@/api/base";
import { useToast } from "primevue/usetoast";

class AccountCreateInputForBatch implements IAccountCreateInputForBatch {
  account_type?: AccountType = AccountType.Student;
  first_name: string = "";
  last_name: string = "";
  middle_name?: string | null = null;
  is_email_verified?: boolean = false;
  connections: AccountCreateConnectionForBatch[] = [];
  permissions: string[] = [];
}

const toast = useToast();

const accounts = reactive<AccountCreateInputForBatch[]>([]);

const addAccount = () => {
  accounts.push(new AccountCreateInputForBatch());
};

const sendBatchAccounts = () => {
  apiClient.admin
    .batchCreateAccountsAdminAccountBatchPost({
      accounts: accounts,
    } as AccountBatchCreateInput)
    .then((response) => {
      console.log(response);
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Projects created successfully",
      });
      accounts.splice(0, accounts.length);
    })
    .catch((error) => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Failed to create projects",
      });
      console.error(error);
    });
};

const accountTypes = ref([
  AccountType.Admin,
  AccountType.Student,
  AccountType.Teacher,
  AccountType.Overseer,
]);
</script>

<template>
  <Panel
    :header="$t('sideMenu.miscellaneousSubTopics.importAccounts')"
    class="w-full"
  >
    <div class="flex flex-column gap-4">
      <div class="flex w-full relative">
        <div class="flex gap-4 absolute right-0 bottom-0">
          <Button
            :label="$t('buttons.actions.create')"
            @click="addAccount"
            icon="pi pi-plus"
          />
          <Button
            :label="$t('buttons.actions.apply')"
            @click="sendBatchAccounts"
            icon="pi pi-save"
          />
        </div>
      </div>
      <Panel>
        <div class="flex gap-4 flex-column">
          <Panel
            :header="$t('entities.account.title')"
            v-for="account in accounts"
          >
            <div class="flex flex-column gap-2 w-full">
              <Dropdown
                v-model="account.account_type"
                :options="accountTypes"
                :placeholder="$t('strings.select')"
              />
              <Divider />
              <InputText
                v-model="account.first_name"
                :placeholder="$t('filters.firstName')"
              />
              <InputText
                v-model="account.last_name"
                :placeholder="$t('filters.lastName')"
              />
              <InputText
                v-model="account.middle_name"
                :placeholder="$t('filters.middleName')"
              />
              <Divider />
              <div class="flex gap-2">
                <span>{{ $t("strings.isEmailVerified") }}</span>
                <InputSwitch v-model="account.is_email_verified" />
              </div>
              <Divider />
              <Panel :header="$t('filters.connections')">
                <div class="flex gap-4 flex-column">
                  <Button
                    :label="$t('buttons.actions.create')"
                    @click="account.connections.push({})"
                  />
                  <Panel
                    :header="$t('entities.connection.title')"
                    v-for="connection in account.connections"
                  >
                    <div class="flex flex-column gap-2 w-full">
                      <DepartmentSearchField
                        :onItemSelect="(event: AutoCompleteItemSelectEvent) => {connection.department_id = event.value.department_id}"
                      />
                      <FacultySearchField
                        :onItemSelect="(event: AutoCompleteItemSelectEvent) => {connection.faculty_id = event.value.faculty_id}"
                      />
                      <GroupSearchField
                        :onItemSelect="(event: AutoCompleteItemSelectEvent) => {connection.group_id = event.value.group_id}"
                      />
                      <Button
                        :label="$t('buttons.actions.delete')"
                        severity="danger"
                        @click="
                          account.connections.splice(
                            account.connections.indexOf(connection),
                            1
                          )
                        "
                      />
                    </div>
                  </Panel>
                </div>
              </Panel>
              <Panel :header="$t('filters.permissions')">
                <PermissionsSearchField
                  :onItemSelect="(event: AutoCompleteItemSelectEvent) => {account.permissions = event.value.map((permission: Permission) => permission.account_permission_id)}"
                  :multiple="true"
                />
              </Panel>
            </div>
          </Panel>
        </div>
      </Panel>
    </div>
  </Panel>
</template>
