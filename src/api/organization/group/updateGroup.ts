import apiClient from "@/api/base";
import { AxiosError } from "axios";
import { Group, UpdateGroupRequest } from "@/api/types/organization/Group";

export function updateGroup(
  group_id: string,
  request: UpdateGroupRequest,
  onSuccess: (group: Group) => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .put(`/admin/group/${group_id}`, request)
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
