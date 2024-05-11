import apiClient from "@/api/base";
import { AxiosError } from "axios";
import { CreateGroupRequest, Group } from "@/api/types/organization/Group";

export function createGroup(
  request: CreateGroupRequest,
  onSuccess: (group: Group) => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .post("/admin/group", request)
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
