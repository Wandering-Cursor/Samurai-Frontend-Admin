import apiClient from "@/api/base";
import { AxiosError } from "axios";
import { Department } from "@/api/types/organization/Department";

export function getDepartment(
  departmentId: string,
  onSuccess: (data: Department) => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .get(`/admin/department/${departmentId}`)
    .then((response) => {
      onSuccess(response.data as Department);
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
