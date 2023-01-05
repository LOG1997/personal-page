import { createApp } from "vue";
import "./style.scss";
// import "@/style/theme/index.scss";
// import "@/css/index.scss";
// import "@popperjs/core";
// import "bootstrap";
import "virtual:windi.css";
import App from "./App.vue";

const app = createApp(App);
// 全局svg组件
import "virtual:svg-icons-register";
import svgIcon from "@/components/SvgIcon/index.vue";
// tspark
import Particles from "vue3-particles";
app.use(Particles);
// svg全局组件
//app
import router from "@/router";
// pinia
import { createPinia } from "pinia";
// pinia持久化
import piniaPluginPersist from "pinia-plugin-persist";
const pinia = createPinia();
pinia.use(piniaPluginPersist);
app.component("svg-icon", svgIcon);
app.use(pinia).use(router).mount("#app");
