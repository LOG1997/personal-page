import { createApp } from "vue";
import "./style.css";
import "virtual:windi.css";
import App from "./App.vue";

const app = createApp(App);
// 全局svg组件
import "virtual:svg-icons-register";
import svgIcon from "@/components/SvgIcon/index.vue";
// svg全局组件
// 路由
import router from "@/router";
// pinia
import { createPinia } from "pinia";
// pinia持久化
import piniaPluginPersist from "pinia-plugin-persist";
const pinia = createPinia();
pinia.use(piniaPluginPersist);
app.component("svg-icon", svgIcon);
app.use(pinia).use(router).mount("#app");
