<template>
  <view>
    <Navbar></Navbar>
    <view class="main">
      <!-- 背景图片 -->
      <image class="bg" src="/static/girl.jpeg" mode="widthFix"></image>
      <view class="header">
        <image src="/static/logo.png"></image>
        <view class="switchSong">
          <u-icon name="play-left" size="15"></u-icon>
          <u-icon name="play-right" size="15"></u-icon>
        </view>
      </view>
      <view class="content"></view>
    </view>
    <view class="footer"></view>
  </view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  height: 80vh;
  .bg {
    position: absolute;
    top: -20rpx;
    left: 0;
    z-index: -1;
    opacity: 0.1;
    width: 100%;
  }
  .header {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 20rpx;
    image {
      width: 50rpx;
      height: 50rpx;
      border-radius: 5rpx;
    }
  }
  .switchSong {
    background: #f4f4f5;
    border-radius: 20rpx;
    height: 60rpx;
    width: 150rpx;
    display: flex;
    justify-content: space-around;
  }
}
</style>