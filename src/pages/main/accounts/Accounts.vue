<script setup lang="ts">
import { getAllAccounts } from "@/api/account/allAccounts";
import { AllAccountsResponse } from "@/api/types/account/allAccounts";
import FilterPanel from "@/components/Search/FilterPanel/FilterPanel.vue";
import { AxiosError } from 'axios';
import { Ref, ref } from 'vue';

let list: Ref<Array<string>> = ref([]);
let loading = ref(false);
let finished = ref(false);

const showError = (error: AxiosError) => {
    console.error(error);
}

const gotAccounts = (data: AllAccountsResponse) => {
    list.value = [];
    list.value.push(...data.content.map((account) => account.username));
    loading.value = false;
    finished.value = true;
};

const onLoad = () => {
    loading.value = true;
    getAllAccounts(undefined, gotAccounts, showError);
};

const onFilter = (filterValues: { [key: string]: string }) => {
    loading.value = true;
    finished.value = false;

    Object.keys(filterValues).forEach(key => {
        if (filterValues[key] === "") {
            delete filterValues[key];
        }
    });
    getAllAccounts(filterValues, gotAccounts, showError);
};

const filters = [
    {
        title: "Username",
        propertyName: "username"
    },
    {
        title: "Email",
        propertyName: "email"
    },
    {
        title: "First Name",
        propertyName: "firstName"
    },
    {
        title: "Last Name",
        propertyName: "lastName"
    },
    {
        title: "Role",
        propertyName: "role"
    },
    {
        title: "Status",
        propertyName: "status"
    }
];
</script>

<template>
    <div class="container">
        <div class="item"><h1>Empty/Info</h1></div>
        <div class="item"><h1>Controls</h1></div>
        <van-list
            v-model:loading="loading"
            :finished="finished"
            loading-text="Loading..."
            finished-text="Finished"
            @load="onLoad"
            class="item"
        >
            <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
        <FilterPanel class="item" :filters="filters" :on-filter="onFilter"/>
    </div>
</template>

<style scoped>
.container {
    scroll-behavior: smooth;
    width: 100%;
    overflow: auto;
    padding: 0.5em;
    border: 1em solid #f0f0f0;
    background: gray;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr 4fr;
    gap: 1em;
}
.item{
    border: 0.2em solid #f0f0f0;
    border-radius: 0.5em;
    padding: 0.5em;
}
</style>
