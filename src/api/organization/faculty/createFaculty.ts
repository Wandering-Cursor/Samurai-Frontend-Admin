import apiClient from "@/api/base";
import { AxiosError } from "axios";
import {
  Faculty,
  FacultyCreateRequest,
} from "@/api/types/organization/Faculty";

export function createFaculty(
  request: FacultyCreateRequest,
  onSuccess: (data: Faculty) => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .post(`/admin/faculty`, request.toObject())
    .then((response) => {
      onSuccess(response.data as Faculty);
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
