import { createSSRApp } from "vue"
import App from "./App.vue"
import uviewPlus from 'uview-plus'
import { createPinia } from 'pinia'

import Tabber from '@components/tabber/index.vue'
import Navbar from '@components/navbar/index.vue'
import ImageCard from '@components/imageCard/index.vue'

const app = createSSRApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(uviewPlus)
app
  .component('Tabber', Tabber)
  .component('Navbar', Navbar)
  .component('ImageCard', ImageCard)

export function createApp() {
	return {
		app,
	};
}
