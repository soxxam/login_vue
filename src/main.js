import { createApp } from 'vue'
import { createPinia, setActivePinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';   

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';          


const app = createApp(App)

const pinia = createPinia()
setActivePinia(pinia);
app.use(pinia)
app.use(PrimeVue)

app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)

app.use(router)
app.mount('#app')
