<template>
    <h1>All Flights</h1>
    <h2>This is a list of {{ store.numberOfFlights }} flights</h2>
    <v-container >
    <v-row       
        class="mb-4"
        no-gutters
    >
      <v-col cols="4" v-for="flight in store.flights" :key="flight.id">
        <v-sheet class="pa-2 ma-2">
            <FlightDetail :flight="flight" />
        </v-sheet>
      </v-col>
      <v-responsive width="100%"></v-responsive>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import FlightDetail from '../components/FlightDetail.vue';
import { useFlightStore } from './../stores/flight'

const store = useFlightStore();
console.log(store.flights);
</script>


