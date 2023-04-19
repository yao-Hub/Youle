<template>
  <view class="musicList_box">
    <Header :total="total"></Header>
    <view class="musicList_box__list">
      <Item
        v-for="i in 10"
        music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名"
        :Non="i">
      </Item>
    </view>
  </view>
</template>

<script lang="ts" setup>
import Header from './header.vue';
import Item from './item.vue'

defineProps<{
  total: string | number
  list?: string[]
}>()
</script>

<style lang="scss" scoped>
.musicList_box {
  border-radius: $uni-border-radius-lg $uni-border-radius-lg 0 0;
  background: #FFF;
  width: 100%;
  box-sizing: border-box;
  padding: 0 25rpx;
  &__list {
    display: flex;
    flex-direction: column;
  }
}
</style>