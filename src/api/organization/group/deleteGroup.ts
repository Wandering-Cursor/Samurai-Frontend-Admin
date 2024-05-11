import apiClient from "@/api/base";
import { AxiosError } from "axios";

export function deleteGroup(
  group_id: string,
  onSuccess: () => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .delete(`/admin/group/${group_id}`)
    .then(() => {
      onSuccess();
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
