import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref, reactive } from 'vue';


// 第一种写法

// interface state {
//   musiclist: musiclist
// }

// musiclist第一种定义方法：A

// interface musiclist {
//   [index: number]: {
//     id: string | number;
//     name: string;
//     [key: string]: any
//   }
// }

// export const songStore = defineStore('song', () => {
//   // 当前播放的音乐id
//   const playSongId = ref<number | string>(0)

//   const play = ref<boolean>(false)

//   const state = reactive<state>({
//     musiclist: [{
//       id: 1,
//       name: '音乐1'
//     }]
//   });

//   function changePlay(ifPlay?: boolean) {
//     play.value = ifPlay ? ifPlay : !play.value
//   }

//   function changeCurrentSong(id: string | number) {
//     playSongId.value = id
//   }
//   return { play, playSongId, changePlay, changeCurrentSong, musiclist: state.musiclist }
// })

// musiclist第二种定义方法：B
interface Music {
  id: number;
  name: string;
  url?: string;
}

// // musiclist第三种定义方法：C
// type MusicList = Record<number, {id: number, name: string, url?:string}>

// 第二种写法
export const songStore = defineStore({
  id: 'song',
  state: () => ({
    playSongId: <number | string>0,
    play: <boolean>false,

    // A
    // musiclist: <musiclist>[{
    //   id: 1,
    //   name: '音乐1'
    // },{
    //   id: 2,
    //   name: '音乐名2',
    //   url: 'url',
    // }]

    // B
    musiclist:<Music []> [{
      id: 1,
      name: '音乐1',
      url: 'url',
    }]

    // C
    // musiclist: <MusicList>{
    //   1: { id: 1, name: '音乐1'},
    //   2: { id: 2, name: '音乐名2', url: 'url' },
    // }
  }),
  actions: {
    changePlay(ifPlay?: boolean) {
      this.play = ifPlay ? ifPlay : !this.play
    },
    changeCurrentSong(id: string | number) {
      this.playSongId = id
    }
  }
})

interface extImportMeta extends ImportMeta {
  hot?: any
}
const extIMeta: extImportMeta = import.meta;
if (extIMeta.hot) {
  extIMeta.hot.accept(acceptHMRUpdate(songStore, extIMeta.hot));
}
