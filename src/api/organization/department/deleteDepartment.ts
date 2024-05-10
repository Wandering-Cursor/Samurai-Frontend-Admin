import apiClient from "@/api/base";
import { AxiosError } from "axios";

export function deleteDepartment(
  department_id: string,
  onSuccess: () => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .delete(`/admin/department/${department_id}`)
    .then(() => {
      onSuccess();
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
