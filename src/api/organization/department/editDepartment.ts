import apiClient from "@/api/base";
import { AxiosError } from "axios";
import {
  Department,
  DepartmentUpdateRequest,
} from "@/api/types/organization/Department";

export function editDepartment(
  departmentId: string,
  request: DepartmentUpdateRequest,
  onSuccess: (data: Department) => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .put(`/admin/department/${departmentId}`, request.toObject())
    .then((response) => {
      onSuccess(response.data as Department);
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
