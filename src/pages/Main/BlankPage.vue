<script setup lang="ts">
import Card from "primevue/card";
import { useHead } from "@unhead/vue";

useHead({
  title: "Blank page",
  meta: [
    { property: "og:title", content: "Not Found!" },
    { property: "og:description", content: "This web-page was not found!" },
  ],
});
</script>

<template>
  <Card
    class="flex h-full w-full align-items-center justify-content-center align-self-center"
  >
    <template #title> {{ $t("blankPage.title") }} </template>
    <template #content>
      <p>{{ $t("blankPage.content") }}</p>
    </template>
  </Card>
</template>
