import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Card from "primevue/card";
import Button from "primevue/button";
import Calendar from "primevue/calendar";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.component("Card", Card);
app.component("Button", Button);
app.component("Calendar", Calendar);

app.mount("#app");
