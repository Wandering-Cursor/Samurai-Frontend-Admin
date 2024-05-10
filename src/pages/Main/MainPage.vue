<script setup lang="ts">
import SidePanel from '@/components/SidePanel/SidePanel.vue'
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import { useHead } from '@unhead/vue'


useHead({
  title: 'Main Page',
  meta: [
    { property: 'og:title', content: 'Main Page' },
    { property: 'og:description', content: 'Main page of the admin' },
  ]
});

</script>

<template>
  <Splitter class="h-full">
    <SplitterPanel class="flex align-items-stretch overflow-scroll" :size="15" :min-size="1">
      <SidePanel />
    </SplitterPanel>
    <SplitterPanel class="flex align-items-stretch justify-content-center m-2 shadow-4 overflow-scroll" :size="85">
      <router-view />
    </SplitterPanel>
  </Splitter>
</template>