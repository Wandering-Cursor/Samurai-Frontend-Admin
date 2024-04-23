import apiClient from "@/api/base";
import { AxiosError } from "axios";
import { AccountInfo } from "../types/account/Account";
import { CreateAccountRequest } from "../types/account/api/createAccount";

export function createAccount(
  data: CreateAccountRequest,
  successCallback: (data: AccountInfo) => void,
  errorCallback: (error: AxiosError) => void
) {
  return apiClient
    .post(`/admin/account/create`, data.toObject())
    .then((response) => {
      successCallback(response.data);
    })
    .catch((error) => {
      errorCallback(error);
    });
}
