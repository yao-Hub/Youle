<template>
  <u-tabbar
    :value="value"
    fixed
    placeholder
    safeAreaInsetBottom
    v-bind="options"
    @change="tabbarChange">
    <!-- <u-tabbar-item v-for="item in tabber" :key="item.name"></u-tabbar-item> -->
  </u-tabbar>
</template>

<script setup lang="ts">
// import {tabber} from './config';
defineProps<{
  value?: string
  options?: Object
}>()

const emit = defineEmits(['change'])

function tabbarChange() {
  emit('change')
}
</script>

<style lang="scss" scoped></style>