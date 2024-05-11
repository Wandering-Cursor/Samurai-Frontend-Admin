import apiClient from "@/api/base";
import { AxiosError } from "axios";
import { Group } from "@/api/types/organization/Group";

export function getGroup(
  group_id: string,
  onSuccess: (group: Group) => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .get(`/admin/group/${group_id}`)
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
