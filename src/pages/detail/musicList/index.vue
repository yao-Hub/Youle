<template>
  <view class="musicList_box">
    <Header :total="total"></Header>
    <view class="musicList_box__list">
      <Item
        v-for="(item, index) in store.musiclist"
        :key="item.id"
        :music-name="item.name"
        :Non="index + 1"
        :play="item.id === store.playSongId && store.play"
        @more="more(item.id)"
        @playSong="playSong($event, item.id)">
      </Item>
    </view>

    <u-action-sheet
      :actions="[{name: '收藏歌曲'}]"
      :show="show"
      closeOnClickOverlay
      closeOnClickAction="true"
      safeAreaInsetBottom
      cancelText="取消"
      @close="show = false"
      @select="select">
    </u-action-sheet>
  </view>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { songStore } from '@/stores/song'

import Header from './header.vue';
import Item from './item.vue'

const store = songStore()

const nowPlayStatus = computed(() => store.play)

defineProps<{
  total: string | number
  list?: string[]
}>()

const show = ref(false);

function playSong(type: string, id:number | string) {
  const ifPlay = type === 'item' || !nowPlayStatus.value;
  store.changeCurrentSong(id)
  store.changePlay(ifPlay)
  if (type === 'item') {
    uni.navigateTo({
      url: '/pages/detail/musicBox/index'
    })
  }
}

function more(id:number | string) {
  show.value = true
}

const select = () => {
  uni.showToast({
    title: '点击了收藏按钮',
    duration: 2000,
    icon: 'none'
  });
}
</script>

<style lang="scss" scoped>
.musicList_box {
  border-radius: $uni-border-radius-lg $uni-border-radius-lg 0 0;
  background: #FFF;
  width: 100%;
  box-sizing: border-box;
  &__list {
    display: flex;
    flex-direction: column;
  }
}
</style>