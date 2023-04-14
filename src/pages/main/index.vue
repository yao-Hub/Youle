<template>
  <div>
    1
    <tabber @tab-click="tabClick"></tabber>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import tabber from '@components/tabber/index.vue';
import home from './home/index.vue';
import account from './account/index.vue';
// import upload from './upload/index.vue';


const state = reactive({
  value: '首页'
})

function tabClick(e: string) {
  console.log('e', e);
  // state.value = e;
}
</script>

<style lang="scss" scoped></style>