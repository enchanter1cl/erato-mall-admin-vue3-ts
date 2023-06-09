import { createApp } from 'vue';
//import './style.css';
import App from './App.vue';
import router from "./router";
import pinia from "./store";
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(ElementPlus);

app.use(router);

app.use(pinia);



app.mount('#app');
