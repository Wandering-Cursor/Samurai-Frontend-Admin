import apiClient from "@/api/base";
import { AxiosError } from "axios";
import {
  SearchGroupsQuery,
  SearchGroupsResponse,
} from "@/api/types/organization/Group";

export default function searchGroups(
  query: SearchGroupsQuery,
  onSuccess: (response: SearchGroupsResponse) => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .get("/admin/group", { params: query.toObject() })
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
