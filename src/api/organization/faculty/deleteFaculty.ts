import apiClient from "@/api/base";
import { AxiosError } from "axios";

export function deleteFaculty(
  facultyId: string,
  onSuccess: () => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .delete(`/admin/faculty/${facultyId}`)
    .then(() => {
      onSuccess();
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
