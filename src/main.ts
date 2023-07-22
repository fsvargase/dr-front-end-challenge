import { createApp } from 'vue'
import {  createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { useFlightStore } from './stores/flight'
import {data} from './assets/data/data';
import { Flight } from './interfaces/flight'
import {addMinutesToDate} from './utils/date'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

loadFonts()

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
const store = useFlightStore() 
const flightToLoad:Flight[] = [];
const origins: string[]= data.map((item)=>item.origin).sort();
const destinations: string[]= data.map((item)=>item.destination).sort();
const cities: string[] =  [...origins,...destinations].sort();
console.log(cities);


for (const element of data) {
    flightToLoad.push({
        id:   element.id,
        origin: element.origin,
        destination: element.destination,
        departure_date: addMinutesToDate(element.departure_date, element.flight_time),
        arrival_date: element.departure_date,
        price:element.price,
        airline:element.airline,
        number_scales:element.number_scales,
        flight_time:element.flight_time
    } );
    
}
store.loadFlights(flightToLoad,cities);
app.component('VueDatePicker', VueDatePicker);

app.use(router)
app.use(vuetify)
app.mount('#app')


