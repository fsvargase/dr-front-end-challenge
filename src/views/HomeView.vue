<template>
  <div class="about">
    <h1>This is an home page {{ store.numberOfFlights }}</h1>
    <ul id="example-1">
  <li v-for="item in store.flights" :key="item.id">
    <FlightDetail :flight="item" />
  </li>
</ul>
  </div>
</template>

<script lang='ts' setup>
import { useFlightStore } from './../stores/flight'
const store = useFlightStore();

</script>

