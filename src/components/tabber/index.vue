<template>
  <u-tabbar
    :value="realValue"
    fixed
    placeholder
    safeAreaInsetBottom>
    <template v-for="item in tabber" :key="item.name">
      <u-tabbar-item
        :name="item.name"
        :icon="item.icon"
        :text="item.text"
        @change="change"
        @click="tabbarClick"></u-tabbar-item>
    </template>
  </u-tabbar>
</template>

<script setup lang="ts">
  import { reactive, computed, ref } from 'vue'
  import {tabber} from './config.js';

  // interface Props {
  //   value?:string,
  //   options?: Object
  // }
  // const props = withDefaults(defineProps<Props>(), {
  //   value: 'home',
  // });

  const realValue = ref('home');

  // const tabbarValue = computed(() => props.value);

  const emit = defineEmits(['tabClick']);

  function tabbarClick(e: string) {
    console.log('tabbarClick', e);
    emit('tabClick', e);
  }

  function change(e: string) {
    console.log('change', e);
  }
</script>

<style lang="scss" scoped></style>