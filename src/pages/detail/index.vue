<template>
  <view>
    <Navbar></Navbar>
    <view class="header">
      <ImageCard src='/static/demo.jpeg' width="250rpx" height="250rpx" count="1.91亿" style="flex-shrink: 0;"></ImageCard>
      <view class="right">
        <text class="hiddenText_more introduction">简介简介简简介简介简</text>
        <view class="hiddenText author">
          <u-avatar src="/static/demo.jpeg" :size="30"></u-avatar>
          <text class="authorName">yaosir</text>
        </view>
      </view>
    </view>
    <musicList class="musicList" :total="100"></musicList>
    <Tabber @tab-click="tabClick"></Tabber>
  </view>
</template>

<script lang="ts" setup>
import musicList from './musicList/index.vue';

function tabClick(e: string) {
  uni.reLaunch({
    url: `/pages/main/index?type=${e}`
  })
}
</script>

<style lang="scss" scoped>
// 微信小程序改变深层组件样式需要把样式放在最上层父组件
::v-deep .uni-select {
  border: none !important;
}
.header {
  position: relative;
  width: 100%;
  height: 350rpx;
  background-image: url('https://thumb.15wo.com/wallpaper/d61/ced619983898a537931d343ff1026159.jpg!0x717.jpg');
  background-color: rgba(0, 0, 0, 0.4);
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: left 8%;
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 25rpx;
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 30rpx;
    height: 250rpx;
    .introduction {
      font-size: $uni-font-size-lg;
      color: #fff;
    }
    .author {
      display: flex;
      align-items: center;
      .authorName {
        font-size: $uni-font-size-sm;
        color: #fff;
        margin-left: 15rpx;
      }
    }
  }
}
.musicList {
  position: relative;
  left: 0;
  top: -10rpx;
}
</style>