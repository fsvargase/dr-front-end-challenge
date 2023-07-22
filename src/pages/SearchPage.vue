<template>
    <h1>Find A Flight</h1>
    <v-container>
      <v-row class="mb-4" no-gutters>
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            <v-autocomplete
              ref="el"
              label="Origin"
              :items="store.cities"
              clearable
              variant="solo"
  
            >
            </v-autocomplete>
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            <v-autocomplete
              label="Destination"
              :items="store.cities"
              clearable
              variant="solo"
            >
            </v-autocomplete>
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            <Datepicker v-model="departure_date" model-type="dd.MM.yyyy" placeholder="Select departure date" />
          </v-sheet>
        </v-col>
        <v-col cols="3">
          <v-sheet class="pa-2 ma-2">
            <Datepicker v-model="arrival_date" model-type="dd.MM.yyyy"  placeholder="Select arrival date"/>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row class="mb-4" no-gutters>
        <v-btn class="me-4" @click="submit"> search </v-btn>
        <v-btn @click="clear"> clear </v-btn> 
      </v-row>
    </v-container>
    <v-container>
      <v-row class="mb-4" no-gutters>
        <v-col cols="4" v-for="flight in store.resulSearch" :key="flight.id">
          <v-sheet class="pa-2 ma-2">
            <FlightDetail :flight="flight" />
          </v-sheet>
        </v-col>
        <v-responsive width="100%"></v-responsive>
      </v-row>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import FlightDetail from "../components/FlightDetail.vue";
  import { useFlightStore } from "./../stores/flight";
  import Datepicker from '../../node_modules/@vuepic/vue-datepicker';
  
  
  
  const store = useFlightStore();
  const departure_date = ref(new Date());
  const arrival_date = ref(new Date());
  function clear() {
    store.clearResultSearch();
  }
  
  function submit() {
    store.searchFlight();
  }
  </script>
  