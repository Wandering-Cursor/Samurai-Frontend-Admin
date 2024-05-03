import apiClient from "@/api/base";
import { AxiosError } from "axios";
import { Faculty } from "@/api/types/organization/Faculty";

export function getFaculty(
  facultyId: string,
  onSuccess: (data: Faculty) => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .get(`/admin/faculty/${facultyId}`)
    .then((response) => {
      onSuccess(response.data as Faculty);
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
