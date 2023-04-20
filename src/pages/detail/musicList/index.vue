<template>
  <view class="musicList_box">
    <Header :total="total"></Header>
    <view class="musicList_box__list">
      <Item
        v-for="i in 10"
        :key="i"
        music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名"
        :Non="i"
        @more="show = true"
        @play="play">
      </Item>
    </view>

    <u-action-sheet
      :actions="[{name: '收藏歌曲'}]"
      :show="show"
      closeOnClickOverlay
      closeOnClickAction="true"
      safeAreaInsetBottom
      cancelText="取消"
      @close="show = false"
      @select="select">
    </u-action-sheet>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Header from './header.vue';
import Item from './item.vue'

defineProps<{
  total: string | number
  list?: string[]
}>()

const show = ref(false);

function play() {}

const select = () => {
  uni.showToast({
    title: '点击了收藏按钮',
    duration: 2000,
    icon: 'none'
  });
}
</script>

<style lang="scss" scoped>
.musicList_box {
  border-radius: $uni-border-radius-lg $uni-border-radius-lg 0 0;
  background: #FFF;
  width: 100%;
  box-sizing: border-box;
  &__list {
    display: flex;
    flex-direction: column;
  }
}
</style>