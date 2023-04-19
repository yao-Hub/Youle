<template>
  <view class="header">
    <view class="header__left">
      <u-icon name="play-circle"></u-icon>
      <text @click="emit('playAll')">全部播放</text>
      <text class="nums">/{{ total }}首</text>
    </view>
    <view class="header__right">
      <u-icon :name="iconName"></u-icon>
      <view style="width: 160rpx;">
        <uni-data-select
          class="dataSelect"
          v-model="selectValue"
          :localdata="state.range"
          @change="change">
        </uni-data-select>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import {ref, reactive, computed} from 'vue';

const state = reactive({
  range: [
    { value: 0, text: "顺序播放" },
    { value: 1, text: "随机播放" },
    { value: 2, text: "单曲循环" },
  ],
  playIcons: [
    '/static/icons/sequentialPlay.png',
    '/static/icons/randomPlay.png',
    '/static/icons/singleCycle.png'
  ]
});
const selectValue = ref(0);

const iconName = computed(() => state.playIcons[selectValue.value]);

interface Props {
  total: string | number
}

withDefaults(defineProps<Props>(), {
  total: 0
})

const emit = defineEmits(['change', 'playAll'])

function change(e: number) {
  emit('change', e)
}
</script>

<style lang="scss" scoped>
::v-deep .uni-select {
  border: none !important;
}
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rpx 0;
  &__left, &__right {
    display: flex;
    font-size: $uni-font-size-base;
    text {
      margin-left: $uni-spacing-row-sm;
    }
    .nums {
      color: $uni-text-color-grey;
      font-size: $uni-font-size-sm;
      align-self: flex-end;
    }
  }
}
</style>