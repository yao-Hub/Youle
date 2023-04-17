<template>
  <view class="card">
    <view class="card__title">
      <text class="left">{{ title }}</text>
      <text class="right" @click="emit('more')">更多></text>
    </view>
    <view class="card__content">
      <view class="card__content__item" v-for="(item, index) in list" :key="index">
        <view class="card__content__item__image">
          <u-image :src='item.src' width="30vw" height="30vw"></u-image>
          <view class="icon" v-if="item.count">
            <u-icon name="server-fill" color="#fff"></u-icon>
            <text>{{ item.count }}</text>
          </view>
        </view>
        <text class="hiddenText introduce">{{ item.introduceText }}</text>
        <text class="author">{{ item.author }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
interface List {
  [index: number]: {
    src?: string
    introduceText?: string
    author?: string
    count?: string | number
  }
}
defineProps<{
  title: string
  list?: List
}>()

const emit = defineEmits(['more', 'itemClick'])

</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  margin-top: 8px;
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    .left {
      font-size: $uni-font-size-lg;
      font-weight: bold;
    }
    .right {
      font-size: $uni-font-size-sm;
      color: $uni-text-color-grey;
    }
  }
  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fill, 30vw);
    grid-row-gap: 15px;
    grid-column-gap: 5px;
    padding: 10px;
    // box-sizing: border-box;
    &__item {
      display: flex;
      flex-direction: column;
      &__image {
        position: relative;
        .icon {
          position: absolute;
          bottom: 5px;
          left: 5px;
          display: flex;
          font-size: $uni-font-size-sm;
          color: #fff;
        }
      }
      .introduce {
        font-size: $uni-font-size-base;
      }
      .author {
        font-size: $uni-font-size-sm;
        color: $uni-text-color-placeholder;
      }
    }
  }
}
</style>