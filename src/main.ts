import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import * as echarts from 'echarts/charts';
import '@arco-design/web-vue/dist/arco.less';

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
