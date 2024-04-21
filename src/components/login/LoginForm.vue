<template>
    <VanSpace direction="vertical" fill>
        <h2 class="centeredText">Log In</h2>
        <VanCellGroup inset>
            <VanCell>
                <VanField v-model="username" label-align="left" label="Username" placeholder="john@doe.com"/>
            </VanCell>
            <VanCell>
                <VanField v-model="password" type="password" label="Password" placeholder="Your password"/>
            </VanCell>
        </VanCellGroup>
        <van-button type="primary" round @click="login" class="stretch">Log In</van-button>
    </VanSpace>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ToastType, showToast } from 'vant'
import {sendLoginRequest} from '@/api/auth/login';
import { AxiosError } from 'axios';


function displayToast(message: string = "Logging in...", type: ToastType = "loading", duration: number = 1000) {
    showToast({
        message: message,
        type: type,
        duration: duration,
        closeOnClick: true,
    });
}

function onError(error: AxiosError){
    console.error(error);

    displayToast(
        "An error occurred while logging in.",
        "fail",
        2000
    )
}

export default defineComponent({
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            displayToast();
            if (this.username.trim() === '' || this.password.trim() === '') {
                displayToast("Please fill in all fields.", "fail", 1000);
                return;
            }
            sendLoginRequest(this.username, this.password, this.goToRoot, onError)
        },
        goToRoot() {
            displayToast("Logged in successfully.", "success", 500);
            this.$router.push("/");
        }
    }
});
</script>