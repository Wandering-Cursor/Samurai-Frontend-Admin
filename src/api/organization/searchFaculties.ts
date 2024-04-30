import apiClient from "@/api/base";
import { AxiosError } from "axios";
import {
  FacultySearchRequest,
  FacultySearchResponse,
} from "@/api/types/organization/Faculty";

export default function searchFaculties(
  query: FacultySearchRequest,
  onSuccess: (response: FacultySearchResponse) => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .get("/admin/faculty", { params: query.toObject() })
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
