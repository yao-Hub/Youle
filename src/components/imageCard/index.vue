<template>
   <view class="imageCard" :style="{width, height}">
    <u-image :src='src' :width="width" :height="height"></u-image>
    <view class="icon" v-if="count">
      <u-icon name="server-fill" color="#fff"></u-icon>
      <text>{{ count }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>

withDefaults(defineProps<{
  src?: string
  width?: string | number
  height?: string | number
  count?: string | number
}>(), {
  width: '31vw',
  height: '31vw'
})

</script>

<style lang="scss" scoped>
.imageCard {
  position: relative;
  border-radius: $uni-border-radius-lg;
  overflow: hidden;
  .icon {
    position: absolute;
    bottom: 5rpx;
    left: 5rpx;
    display: flex;
    font-size: $uni-font-size-sm;
    color: #fff;
  }
}
</style>