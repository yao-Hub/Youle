<template>
  <u-tabbar
    :value="value"
    fixed
    placeholder
    safeAreaInsetBottom>
    <template v-for="item in tabber" :key="item.name">
      <u-tabbar-item
        :name="item.name"
        :icon="item.icon"
        :text="item.text"
        @click="tabbarClick"></u-tabbar-item>
    </template>
  </u-tabbar>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import {tabber} from './config.js';

  const value = ref('home');

  const emit = defineEmits(['tabClick']);

  function tabbarClick(e: string) {
    emit('tabClick', e);
  }
</script>

<style lang="scss" scoped></style>