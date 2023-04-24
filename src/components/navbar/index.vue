<template>
  <u-navbar :title="title" placeholder>
    <template #left>
      <view class="u-nav-slot">
        <u-icon name="arrow-left" size="19" @click="back"></u-icon>
        <u-line direction="col" :hairline="false" length="16" margin="0 8px"></u-line>
        <u-icon name="home" size="20" @click="goHome"></u-icon>
      </view>
    </template>
  </u-navbar>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  title?: string
}>(), {
  title: 'Youle'
})

const emit = defineEmits(['back'])

function back() {
  emit('back')
  uni.navigateBack()
}



const goHome = () => {
  uni.reLaunch({url: '/pages/main/index'})
}

</script>

<style lang="scss" scoped>
.u-nav-slot {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 0.5px;
  border-radius: 100px;
  border-color: #dadbde;
  padding: 3px 7px;
  opacity: .8;
}
</style>