import apiClient from "@/api/base";
import { AxiosError } from "axios";

export function sendLoginRequest(
    email: string,
    password: string,
    successCallback: () => void,
    errorCallback: (error: AxiosError) => void
) {
    return apiClient
        .post("/auth/token", {
            username: email,
            password: password,
        })
        .then((response) => {
            console.log("Successful login for user:", email);
            localStorage.setItem("accessToken", response.data.access_token);
            successCallback();
        })
        .catch((error) => {
            errorCallback(error);
        });
}
