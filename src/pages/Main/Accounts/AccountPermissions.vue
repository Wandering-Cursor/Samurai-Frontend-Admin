<script setup lang="ts">
import { getAccount } from "@/api/account/getAccount";
import { AccountInfo } from "@/api/types/account/Account";
import { GetAccountRequest } from "@/api/types/account/api/getAccount";
import { useToast } from "primevue/usetoast";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { AutoCompleteItemSelectEvent } from "primevue/autocomplete";

import {
  Permission,
  SetAccountPermissions,
} from "@/api/types/account/Permission";
import PermissionsSearchField from "@/components/Search/Permissions/PermissionsSearchField.vue";
import { setPermissions } from "@/api/account/setPermissions";
import PermissionRepresentation from "@/components/Account/PermissionRepresentation.vue";

const route = useRoute();
const toast = useToast();

let accountInfo = ref<AccountInfo | null>(null);
let allPermissions = ref<Permission[]>([]);

let createPermissionDialogVisible = ref(false);
let newPermission = ref<Permission | null>(null);

const fetchAccount = () => {
  getAccount(
    new GetAccountRequest(route.params.id as string),
    (response) => {
      accountInfo.value = response;
      allPermissions.value = accountInfo.value.permissions;
    },
    (error) => {
      console.error(error);
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Failed to get account info",
        life: 5000,
      });
    }
  );
};

const removeItem = (permissionId: string) => {
  allPermissions.value = allPermissions.value.filter(
    (permission) => permission.account_permission_id !== permissionId
  );
};

const saveAccountPermissions = () => {
  setPermissions(
    accountInfo.value?.account_id as string,
    new SetAccountPermissions(allPermissions.value),
    () => {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "Permissions saved",
        life: 3000,
      });
    },
    (error) => {
      console.error(error);
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Failed to save permissions",
        life: 3000,
      });
    }
  );
};

const onPermissionSelect = (event: AutoCompleteItemSelectEvent) => {
  newPermission.value = event.value as Permission;
};

const addPermission = () => {
  if (newPermission.value) {
    allPermissions.value.push(newPermission.value);
    createPermissionDialogVisible.value = false;
  }
};

onMounted(() => {
  fetchAccount();
});
</script>

<template>
  <Panel class="w-full">
    <Menubar>
      <template #start>
        <p>{{ $t("permissionsPage.title") }} {{ accountInfo?.email }}</p>
      </template>
      <template #end>
        <div class="flex gap-2">
          <Button
            v-tooltip.left="$t('buttons.actions.create')"
            icon="pi pi-plus"
            class="p-button-rounded"
            @click="createPermissionDialogVisible = true"
          />
          <Button
            v-tooltip.left="$t('buttons.actions.save')"
            icon="pi pi-save"
            class="p-button-rounded"
            @click="saveAccountPermissions"
          />
        </div>
      </template>
    </Menubar>
    <Panel :header="$t('permissionsPage.listTitle')">
      <div class="flex flex-column gap-4">
        <PermissionRepresentation
          :permission="permission"
          v-for="permission in allPermissions"
          :key="permission.account_permission_id"
        >
          <Button
            v-tooltip.right="$t('buttons.actions.delete')"
            icon="pi pi-trash"
            class="p-button-rounded p-button-danger"
            @click="removeItem(permission.account_permission_id)"
          />
        </PermissionRepresentation>
      </div>
    </Panel>
  </Panel>

  <Dialog
    v-model:visible="createPermissionDialogVisible"
    modal
    :header="$t('permissionsPage.modal.title')"
    :style="{ width: '50%' }"
  >
    <span class="p-text-secondary block mb-5"
      >{{ $t("permissionsPage.modal.subtitle") }} {{ accountInfo?.email }}</span
    >
    <div class="flex flex-column gap-2">
      <PermissionsSearchField :onItemSelect="onPermissionSelect" />
      <Divider />
      <Button :label="$t('buttons.actions.create')" @click="addPermission" />
    </div>
  </Dialog>
</template>
