<template>
  <view class="musicList_Item">
    <view class="musicList_Item__left">
      <view class="musicList_Item__left__Non">{{ Non }}</view>
      <view class="musicList_Item__left__content">
        <text class="hiddenText" style="font-size: small;">{{ musicName }}</text>
        <text style="font-size: 12px; color: #999;">{{ author }}</text>
      </view>
    </view>
    <view class="musicList_Item__right">
      <u-icon name="play-circle" size="24"></u-icon>
      <u-icon name="more-dot-fill" size="20"></u-icon>
    </view>
  </view>
</template>

<script setup lang="ts">
interface props {
  Non: string | number,
  musicName: string,
  author?: string
}

withDefaults(defineProps<props>(), {
  author: '未知'
})

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
  // background: red;
  padding: 5rpx 20rpx;
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