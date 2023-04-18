<template>
  <view class="musicList_box">
    <Header :total="total"></Header>
    <view class="musicList_box__list">
      <Item music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名" Non="1"></Item>
      <Item music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名" Non="1"></Item>
      <Item music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名" Non="1"></Item>
      <Item music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名" Non="1"></Item>
      <Item music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名" Non="1"></Item>
      <Item music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名" Non="1"></Item>
      <Item music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名" Non="1"></Item>
      <Item music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名" Non="1"></Item>
      <Item music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名" Non="1"></Item>
      <Item music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名" Non="1"></Item>
      <Item music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名" Non="1"></Item>
      <Item music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名" Non="1"></Item>
      <Item music-name="音乐音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名音乐名名" Non="1"></Item>

    </view>
  </view>
</template>

<script lang="ts" setup>
import Header from './header.vue';
import Item from './item.vue'

defineProps<{
  total: string | number
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