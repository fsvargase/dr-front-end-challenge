import { defineStore } from 'pinia';
import { Flight } from './../interfaces/flight'

export const useFlightStore = defineStore('flight', {

    state: () => ({
        flights: [] as Flight[],
        resulSearch: [],
        numberOfFlights: 0,
    }),

    actions: {
        setNumberOfFlights() {
            this.numberOfFlights = this.flights.length;
        },
        getNumberOfFlights() {
            return this.numberOfFlights ;
        },
        loadFlights(flights:Flight[]) {
            this.flights = flights;
            this.numberOfFlights = this.flights.length;
            this.resulSearch=[];
        },
    }
})