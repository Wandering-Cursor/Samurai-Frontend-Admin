import { createApp } from "vue";
import "primeflex/primeflex.css";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primeicons/primeicons.css";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./lib/router";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.mount("#app");
app.directive("tooltip", Tooltip);
