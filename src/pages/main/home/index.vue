<template>
  <div>
    <card title="标题1" :list="state.list" @more="moreClick" @item-click="itemClick"></card>
    <card title="标题2" :list="state.list" @more="moreClick" @item-click="itemClick"></card>
  </div>
</template>

<script setup lang="ts">
import card from './card.vue';
import { reactive } from 'vue';

const state = reactive({
  list: [{
    src: "/static/logo.png",
    introduceText: '介绍介绍介绍介绍介绍介绍介绍介绍介绍',
    author: '作者',
    count: '2亿'
  },{
    src: "/static/demo.jpeg",
    introduceText: '介绍介绍介绍介绍介绍介绍介绍介绍介绍',
    author: '作者'
  },{
    src: "/static/logo.png",
    introduceText: '介绍介绍介绍',
    author: '作者',
    count: '2.2亿'
  },{
    src: "/static/demo.jpeg",
    introduceText: '介绍介绍介绍',
    author: '作者'
  }]
})

function moreClick() {

}

function itemClick(info:any) {
  console.log('info', info.src);
}
</script>

<style lang="scss" scoped></style>