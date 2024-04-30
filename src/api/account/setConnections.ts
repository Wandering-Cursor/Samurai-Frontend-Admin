import apiClient from "@/api/base";
import { AxiosError } from "axios";
import { SetAccountConnections } from "@/api/types/account/Connection";
import { AccountInfo } from "@/api/types/account/Account";

export const setConnections = async (
  account_id: string,
  connections: SetAccountConnections,
  onSuccess: (accountInfo: AccountInfo) => void,
  onError: (error: AxiosError) => void
) => {
  return apiClient
    .post(`/admin/account/${account_id}/connections`, connections.toObject())
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error) => {
      onError(error);
    });
};
