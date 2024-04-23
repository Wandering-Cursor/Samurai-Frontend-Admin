<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from "primevue/usetoast";
import FloatLabel from 'primevue/floatlabel';
import { sendLoginRequest } from '@/api/auth/login';
import { AxiosError } from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const toast = useToast();

const displayToast = (message: string, type: 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast', duration: number = 1000) => {
    toast.add({
        severity: type,
        summary: message,
        life: duration
    });
}

const onError = (error: AxiosError) => {
    console.error(error);

    displayToast(
        `An error occurred while logging in.\n Details: ${error.response?.status || 'Status code unknown'} - ${error.message}`,
        "error",
        5000
    )
}

const username = ref('');
const password = ref('');

const login = () => {
    displayToast("Logging in...", "info", 1000);
    if (username.value.trim() === '' || password.value.trim() === '') {
        displayToast("Please fill in all fields.", "error", 1000);
        return;
    }
    sendLoginRequest(username.value, password.value, goToRoot, onError)
}

const goToRoot = () => {
    displayToast("Logged in successfully.", "success", 500);
    router.push('/');
}

defineExpose({
    username,
    password,
    login
});
</script>

<template>
    <Card>
        <template #header>
            <div class="flex justify-content-center">
                <h1>Login</h1>
            </div>
        </template>
        <template #content>
            <div class="flex flex-column gap-6 p-4">
                <div class="flex justify-content-center">
                    <FloatLabel>
                        <InputText id="email" v-model="username" />
                        <label for="email">Email/Username</label>
                    </FloatLabel>
                </div>
                <div class="flex justify-content-center">
                    <FloatLabel>
                        <Password id="password" v-model="password" :feedback="false" />
                        <label for="password">Password</label>
                    </FloatLabel>
                </div>
            </div>
        </template>
        <template #footer>
            <div class="flex justify-content-center">
                <Button label="Log In" @click="login" class="flex-grow-1" />
            </div>
        </template>
    </Card>
</template>
