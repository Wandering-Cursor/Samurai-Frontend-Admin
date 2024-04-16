import apiClient from "@/api/base";

export function getAccountsList() {
    return apiClient.get("/admin/account").then((response) => {
        return response.data;
    });
}
