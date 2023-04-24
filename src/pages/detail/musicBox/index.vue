<template>
  <view>
    <Navbar></Navbar>
    <view class="main">
      <!-- 背景图片 -->
      <image class="bg" src="/static/album.webp" mode="scaleToFill"></image>

      <view class="header">
        <image src="/static/logo.png"></image>
        <view class="switchSong">
          <u-icon name="play-left" size="15"></u-icon>
          <u-icon name="play-right" size="15"></u-icon>
        </view>
      </view>

      <view class="content">
        <view class="ring" @click="play = !play">
          <image src="/static/album.webp" :class="[play ? 'play': 'pause', 'rotate']"></image>
          <view class="palyIcon">
            <u-icon :name="play ? 'pause' : 'play-right-fill'" color="#FFF" size="30"></u-icon>
          </view>
        </view>
      </view>

    </view>
    <view class="footer"></view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const play = ref(true);

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
    height: 100%;
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
    .switchSong {
      background: #f4f4f5;
      border-radius: 20rpx;
      height: 60rpx;
      width: 150rpx;
      display: flex;
      justify-content: space-around;
    }
  }

  .content {
    position: relative;
    height: 100%;
    .ring {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%);
      width: 75vw;
      height: 75vw;
      background-clip: padding-box;
      border-radius: 50%;
      overflow: hidden;
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        border: 10px solid rgba(222, 214, 214, 0.54);
        box-sizing: border-box;
      }
      image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      .rotate {
        animation: myRotate 30s linear infinite;
        -webkit-animation: myRotate 30s linear infinite;
      }
      @-webkit-keyframes myRotate{
        0%{ -webkit-transform: rotate(0deg);}
        100%{ -webkit-transform: rotate(360deg);}
      }
      @keyframes myRotate{
        0%{ -webkit-transform: rotate(0deg);}
        100%{ -webkit-transform: rotate(360deg);}
      }
      .play {
        animation-play-state: running;
      }
      .pause {
        animation-play-state: paused;
      }
      .palyIcon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        width: 60px;
        background-color: rgba(0, 0, 0, 0.45);
        border-radius: 50%;
      }
    }
  }
}
</style>