import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// 将自动注册所有组件为全局组件
import DataVVue3 from "@kjgl77/datav-vue3";

const app = createApp(App);
app.use(DataVVue3);
app.mount("#app");
