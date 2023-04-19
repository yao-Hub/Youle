<template>
  <div>
    <home v-if="commentName === 'home'"></home>
    <account v-if="commentName === 'account'"></account>
    <Tabber @tab-click="tabClick"></Tabber>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import Tabber from '@components/tabber/index.vue';
import home from './home/index.vue';
import account from './account/index.vue';

const commentName = ref('home');

onLoad((options) => {
  if (options?.type) {
    commentName.value = options.type;
  }
})

function tabClick(e: string) {
  commentName.value = e;
}
</script>

<style lang="scss" scoped></style>