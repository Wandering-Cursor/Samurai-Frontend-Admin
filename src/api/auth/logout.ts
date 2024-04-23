import apiClient from "@/api/base";
import { AxiosError } from "axios";

export function sendLogoutRequest(
  successCallback: () => void,
  errorCallback: (error: AxiosError) => void
) {
  return apiClient
    .post("/auth/logout", null)
    .then(() => {
      console.log("Logging out from the admin panel");
      localStorage.removeItem("accessToken");
      successCallback();
    })
    .catch((error) => {
      errorCallback(error);
    });
}
