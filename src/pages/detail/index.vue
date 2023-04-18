<template>
  <view>
    <view class="header"></view>
    <musicList class="musicList" :total="100"></musicList>
  </view>
</template>

<script lang="ts" setup>
import musicList from '@components/musicList/index.vue';

</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 350rpx;
  background-image: url('/static/girl.jpeg');
  background-color: rgba(0, 0, 0, 0.4);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: left 8%;
  background-blend-mode: multiply;
}
.musicList {
  position: relative;
  left: 0;
  top: -50rpx;
}
</style>