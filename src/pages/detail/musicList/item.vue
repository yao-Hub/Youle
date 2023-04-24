<template>
  <view class="musicList_Item">
    <view class="musicList_Item__left" @click="playSong(0)">
      <view class="musicList_Item__left__Non">{{ Non }}</view>
      <view class="musicList_Item__left__content">
        <text class="hiddenText" :style="{fontSize: 'small', color: play ? '#3c9cff' : '#000'}">{{ musicName }}</text>
        <text class="hiddenText" :style="{fontSize: '12px', color: play ? '#3c9cff': '#999'}">{{ author }}</text>
      </view>
    </view>
    <view class="musicList_Item__right">
      <u-icon :name="play ? 'pause-circle' : 'play-circle'" size="24" @click="playSong(1)"></u-icon>
      <u-icon name="more-dot-fill" size="20" @click="emit('more')"></u-icon>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface props {
  Non: string | number,
  musicName: string,
  author?: string
}

withDefaults(defineProps<props>(), {
  author: '未知'
})

const play = ref(false);

const emit = defineEmits(['more'])

function playSong(e: number) {
  play.value = !play.value
  
  if (!e) {
    uni.navigateTo({
      url: '/pages/detail/musicBox/index'
    })
  }
}
</script>

<style lang="scss" scoped>
::v-deep .uicon-more-dot-fill {
  transform: rotate(90deg);
}
.musicList_Item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100rpx;
  padding: 5rpx 40rpx;
  box-sizing: border-box;
  &:active {
    background-color: #f4f4f5;
  }
  &__left {
    display: flex;
    align-items: center;
    &__Non {
      color: $uni-text-color-grey;
      margin-right: 20rpx;
      font-size: $uni-font-size-sm;
    }
    &__content {
      max-width: 400rpx;
      display: flex;
      flex-direction: column;
      line-height: 40rpx;
    }
  }
  &__right {
    display: flex;
    align-items: center;
    width: 150rpx;
    justify-content: space-between;
  }

}
</style>