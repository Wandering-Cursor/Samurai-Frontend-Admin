import apiClient from "@/api/base";
import { AxiosError } from "axios";
import { CreateConnection, Connection } from "@/api/types/account/Connection";

export default function createConnection(
  connection: CreateConnection,
  onSuccess: (connection: Connection) => void,
  onError: (error: AxiosError) => void
) {
  apiClient
    .post("/admin/connections", connection)
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error: AxiosError) => {
      onError(error);
    });
}
