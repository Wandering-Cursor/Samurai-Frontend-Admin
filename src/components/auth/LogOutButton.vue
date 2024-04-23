<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import { sendLogoutRequest } from "@/api/auth/logout";
import { AxiosError } from "axios";

const toast = useToast();
const router = useRouter();

const onLogout = () => {
    toast.add({ severity: "success", summary: "Logged out", life: 3000 });
    router.push("/login");
};
const onError = (error: AxiosError) => {
    console.error(error);

    toast.add({ severity: "error", summary: "Error logging out", life: 3000 });
};
</script>

<template>
    <div class="flex justify-content-end">
        <Button icon="pi pi-sign-out" v-tooltip.focus.bottom="'Logout'" aria-label="Logout"
            @click="() => { sendLogoutRequest(onLogout, onError) }">
        </Button>
    </div>
</template>
