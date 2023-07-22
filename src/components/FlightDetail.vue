<template>
    <v-card
      class="mx-auto"
      max-width="368"
      variant="outlined"

    >
        <v-row align="center" no-gutters>
            <v-col cols="6" class="text-center">
                <v-card-item title="Departure">
        <template v-slot:subtitle>
            <v-icon
            icon="mdi-airplane-takeoff"
            size="18"
            color="success"
            class="me-1 pb-1"
            ></v-icon>
            <v-list-item-subtitle>{{ flight.origin }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ flight.departure_date }}</v-list-item-subtitle>
        </template>
        </v-card-item>
            </v-col>
            <v-col cols="6" class="text-center">
                <v-card-item title="Arrival">
        <template v-slot:subtitle>
            <v-icon
            icon="mdi-airplane-landing"
            size="18"
            color="success"
            class="me-1 pb-1"
            ></v-icon>
            <v-list-item-subtitle>{{ flight.destination }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ flight.arrival_date }}</v-list-item-subtitle>
        </template>
        </v-card-item>
            </v-col>
        </v-row>

        <v-card-text class="py-0">
            <v-row align="center" no-gutters>
            <v-col
                class="text-h6"
                cols="6"
            >
            <v-icon
                color="primary"
                icon="mdi-cash"
                size="36"
                ></v-icon>
            {{ flight.price.toFixed(2) }}
            </v-col>
    
            <v-col cols="6" class="text-center">
                <v-icon
                color="primary"
                icon="mdi-airport"
                size="36"
                ></v-icon>
                {{ flight.airline }}

            </v-col>
            </v-row>
        </v-card-text>
  
      <div class="d-flex py-3 justify-space-between">
        <v-list-item
          density="compact"
          prepend-icon="mdi-airplane-landing"
        >
          <v-list-item-subtitle>{{ flight.number_scales }}</v-list-item-subtitle>
        </v-list-item>
  
        <v-list-item
          density="compact"
          prepend-icon="mdi-clock"
        >
          <v-list-item-subtitle>{{ (flight.flight_time/60).toFixed(2) }} h.</v-list-item-subtitle>
        </v-list-item>
      </div>
    </v-card>
  </template>  
  <script lang='ts' >
    export default {
        props: {
    flight: {
      type: Object,
      required: true,
    },
  },
      data: () => ({
        labels: { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' },
        expand: false,
        time: 0,
        forecast: [
          { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
          { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
          { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
        ],
      }),      
    }
  </script>