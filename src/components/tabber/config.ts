interface tabberItem {
  name: string,
  icon?: string,
  text?: string,
}

interface tabberList {
  [index: number]: tabberItem;
}

export const tabber: tabberList = [
  {
    name: 'home',
    icon: 'home',
    text: '乐库',
  },
  {
    name: 'upload',
    icon: 'plus-circle',
    text: '上传',
  },
  {
    name: 'account',
    icon: 'account',
    text: '我的',
  }
]