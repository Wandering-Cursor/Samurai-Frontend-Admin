import apiClient from "@/api/base";
import { AxiosError } from "axios";
import { AllAccountsResponse } from "../types/account/allAccounts";

export function getAllAccounts(
  queryParams: { [key: string]: string } | undefined,
  successCallback: (data: AllAccountsResponse) => void,
  errorCallback: (error: AxiosError) => void
) {
  return apiClient
    .get("/admin/account", { params: queryParams })
    .then((response) => {
      successCallback(response.data);
    })
    .catch((error) => {
      errorCallback(error);
    });
}
