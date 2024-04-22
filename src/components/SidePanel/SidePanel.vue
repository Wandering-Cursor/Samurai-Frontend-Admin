<template>
    <VanSpace direction="vertical">
        <h1>Menu</h1>
        <VanButton type="default" plain icon="/home_FILL1_wght400_GRAD0_opsz24.svg" @click="navigateHome">Home</VanButton>
        <VanButton type="default" plain icon="/account_circle_FILL1_wght400_GRAD0_opsz24.svg" @click="navigateAccounts">Accounts</VanButton>
        <VanButton type="default" plain icon="/school_FILL1_wght400_GRAD0_opsz24.svg" @click="navigateOrganization">Organization</VanButton>
        <VanButton type="default" plain icon="/work_FILL1_wght400_GRAD0_opsz24.svg" @click="navigateProjects">Projects</VanButton>
        <VanButton type="default" plain icon="/construction_FILL1_wght400_GRAD0_opsz24.svg" @click="navigateOtherSettings">Other</VanButton>
        <p>By <a href="https://github.com/Wandering-Cursor/">Wandering-Cursor</a> team</p>
    </VanSpace>
</template>

<style scoped>
.van-space{
    max-width: 10vw;
    height: 100%;
}
.van-button{
    width: 100%;
}
</style>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateHome = () => {
    router.push('/')
}
const navigateAccounts = () => {
    router.push('/accounts')
}
const navigateOrganization = () => {
    router.push('/organization')
}
const navigateProjects = () => {
    router.push('/projects')
}
const navigateOtherSettings = () => {
    router.push('/other')
}

</script>