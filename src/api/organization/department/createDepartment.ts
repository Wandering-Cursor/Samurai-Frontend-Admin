import apiClient from "@/api/base";
import { AxiosError } from "axios";
import {
  Department,
  DepartmentCreateRequest,
} from "@/api/types/organization/Department";

export function createDepartment(
  request: DepartmentCreateRequest,
  onSuccess: (data: Department) => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .post(`/admin/department`, request.toObject())
    .then((response) => {
      onSuccess(response.data as Department);
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
