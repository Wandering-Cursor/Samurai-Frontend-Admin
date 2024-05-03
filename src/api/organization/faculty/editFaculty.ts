import apiClient from "@/api/base";
import { AxiosError } from "axios";
import {
  Faculty,
  FacultyCreateRequest,
} from "@/api/types/organization/Faculty";

export function editFaculty(
  facultyId: string,
  request: FacultyCreateRequest,
  onSuccess: (data: Faculty) => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .put(`/admin/faculty/${facultyId}`, request.toObject())
    .then((response) => {
      onSuccess(response.data as Faculty);
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
