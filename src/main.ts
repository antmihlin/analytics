import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Card from "primevue/card";

import App from './App.vue'
import router from './router'

import './assets/main.css'
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.component('Dialog', Dialog);
app.component('Card', Card);

app.mount('#app')
