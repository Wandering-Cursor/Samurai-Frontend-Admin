import apiClient from "@/api/base";
import { AxiosError } from "axios";
import { Permission } from "@/api/types/account/Permission";

export function getPermissions(
  successCallback: (data: Permission[]) => void,
  errorCallback: (error: AxiosError) => void
) {
  return apiClient
    .get("/admin/permissions")
    .then((response) => {
      successCallback(response.data);
    })
    .catch((error) => {
      errorCallback(error);
    });
}
