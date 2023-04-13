<template>
  <div>
    {{ state.count }}啥玩意？
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({ count: 0 });
</script>

<style lang="scss" scoped></style>