import apiClient from "@/api/base";
import { AxiosError } from "axios";
import {
  GetAccountRequest,
  GetAccountResponse,
} from "../types/account/api/getAccount";

export function getAccount(
  params: GetAccountRequest | undefined,
  successCallback: (data: GetAccountResponse) => any | void,
  errorCallback: (error: AxiosError) => void
) {
  return apiClient
    .get(`/admin/account/${params?.account_id}`, { params: params?.toObject() })
    .then((response) => {
      successCallback(response.data);
    })
    .catch((error) => {
      errorCallback(error);
    });
}
