import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref, reactive } from 'vue';

interface state {
  musiclist: musiclist
}

interface musiclist {
  [index: number]: {
    id: string | number;
    name: string;
    [key: string]: any
  }
}

export const songStore = defineStore('song', () => {
  // 当前播放的音乐id
  const playSongId = ref<number | string>(0)

  const play = ref<boolean>(false)

  const state = reactive<state>({
    musiclist: [{
      id: 1,
      name: '音乐1'
    },{
      id: 2,
      name: '音乐名2',
      url: 'url',
    },{
      id: 3,
      name: '音乐名3',
      url: 'url',
    },{
      id: 4,
      name: '音乐名4',
      url: 'url',
    },{
      id: 5,
      name: '音乐名5',
      url: 'url',
    },{
      id: 6,
      name: '音乐名6',
      url: 'url',
    },{
      id: 7,
      name: '音乐名7',
      url: 'url',
    },{
      id: 8,
      name: '音乐名8',
      url: 'url',
    }]
  });

  function changePlay(ifPlay?: boolean) {
    play.value = ifPlay ? ifPlay : !play.value
  }

  function changeCurrentSong(id: string | number) {
    playSongId.value = id
  }
  return { play, playSongId, changePlay, changeCurrentSong, musiclist: state.musiclist }
})