<template>
  <div>
    {{ state.count }}
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({ count: 0 });
</script>

<style lang="scss" scoped></style>