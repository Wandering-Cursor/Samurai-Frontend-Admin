<script setup lang="ts">
import SidePanel from '@/components/SidePanel/SidePanel.vue'
</script>

<template>
    <div class="mainContainer">
        <SidePanel/>
        <div class="mainContent">
            <router-view />
        </div>
    </div>
</template>

<style scoped>
.mainContainer{
    display: flex;
    flex-direction: row;
    row-gap: 1rem;
    height: 100%;
    width: 100%;
}
.mainContent{
    flex-grow: 1;
    display: flex;
}
</style>