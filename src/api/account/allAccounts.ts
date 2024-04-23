import apiClient from "@/api/base";
import { AxiosError } from "axios";
import {
  AllAccountsQuery,
  AllAccountsResponse,
} from "../types/account/api/allAccounts";

export function getAllAccounts(
  queryParams: AllAccountsQuery | undefined,
  successCallback: (data: AllAccountsResponse) => void,
  errorCallback: (error: AxiosError) => void
) {
  return apiClient
    .get("/admin/account", { params: queryParams?.toObject() })
    .then((response) => {
      successCallback(response.data);
    })
    .catch((error) => {
      errorCallback(error);
    });
}
