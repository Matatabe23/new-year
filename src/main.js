import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import componentUI from '@/components/UI'
import componentPanel from '@/components/Panel'

const app = createApp(App)

//Глобально в проекте регестрируем UI, Panel, Other компоненты
const components = [...componentUI, ...componentPanel];
components.forEach(component => {
	app.component(component.name, component);
});

app.use(store).use(router).mount('#app')
