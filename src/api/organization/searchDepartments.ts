import apiClient from "@/api/base";
import { AxiosError } from "axios";
import {
  DepartmentSearchRequest,
  DepartmentSearchResponse,
} from "@/api/types/organization/Department";

export function searchDepartments(
  query: DepartmentSearchRequest,
  onSuccess: (response: DepartmentSearchResponse) => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .get("/admin/department", { params: query.toObject() })
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
