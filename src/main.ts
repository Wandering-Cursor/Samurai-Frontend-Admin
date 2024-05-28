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
import { createHead } from "@unhead/vue";
import DialogService from 'primevue/dialogservice';
import Ripple from 'primevue/ripple';
import { i18n } from "./i18n/i18n";

const head = createHead();

const app = createApp(App);

app.directive('ripple', Ripple);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.use(DialogService);
app.use(head);
app.use(i18n);
app.mount("#app");
app.directive("tooltip", Tooltip);
