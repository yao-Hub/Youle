<template>
  <div>
    <home v-if="commentName === 'home'"></home>
    <account v-if="commentName === 'account'"></account>
    <upload v-if="commentName === 'upload'"></upload>
    <Tabber @tab-click="tabClick"></Tabber>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Tabber from '@components/tabber/index.vue';
import home from './home/index.vue';
import account from './account/index.vue';
import upload from './upload/index.vue';

interface componentOptions {
  [proName: string]: {
    title: string
  }
}

const componentOptions:componentOptions = {
  home: {
    title: '乐库'
  },
  account: {
    title: '我的'
  },
  upload: {
    title: '上传'
  }
};

const commentName = ref('home');

watch(commentName, (value: string) => {
  const title = componentOptions[value].title
  uni.setNavigationBarTitle({title});
}, {immediate: true});

function tabClick(e: string) {
  commentName.value = e;
}
</script>

<style lang="scss" scoped></style>