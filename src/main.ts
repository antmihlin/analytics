import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
// import Chart from 'primevue/chart';
import ColorPicker from 'primevue/colorpicker';
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
app.component('ColorPicker', ColorPicker);
// app.component('Chart', Chart);
app.component('Card', Card);

app.mount('#app')
