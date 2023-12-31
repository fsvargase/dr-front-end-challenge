import { defineStore } from 'pinia';
import { Flight } from './../interfaces/flight'

export const useFlightStore = defineStore('flight', {

    state: () => ({
        flights: [] as Flight[],
        resulSearch: [] as Flight[],
        numberOfFlights: 0,
        cities: [] as string[],
    }),

    actions: {
        setNumberOfFlights() {
            this.numberOfFlights = this.flights.length;
        },
        clearResultSearch() {
            this.resulSearch=[];
        },
        searchFlight() {
            this.resulSearch=this.flights.slice(0,12);
        },
        getNumberOfFlights() {
            return this.numberOfFlights ;
        },
        loadFlights(flights:Flight[], cities:string[]) {
            this.flights = flights;
            this.numberOfFlights = this.flights.length;
            this.cities = cities;
            this.resulSearch=[];
        },
    }
})