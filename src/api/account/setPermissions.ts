import apiClient from "@/api/base";
import { AxiosError } from "axios";
import { SetAccountPermissions } from "../types/account/Permission";
import { AccountInfo } from "@/api/types/account/Account";

export const setPermissions = async (
  account_id: string,
  permissions: SetAccountPermissions,
  onSuccess: (accountInfo: AccountInfo) => void,
  onError: (error: AxiosError) => void
) => {
  return apiClient
    .post(`/admin/account/${account_id}/permissions`, permissions.toObject())
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error) => {
      onError(error);
    });
};
