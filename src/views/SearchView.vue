<template>
    <h1>Find A Flight</h1>
  <v-form >
    <v-text-field
      v-model="state.name"
      :error-messages="v$.name.$errors.map(e => e.$message)"
      :counter="10"
      label="Name"
      required
      @input="v$.name.$touch"
      @blur="v$.name.$touch"
    ></v-text-field>
    <v-select
      v-model="state.select"
      :items="items"
      :error-messages="v$.select.$errors.map(e => e.$message)"
      label="Item"
      required
      @change="v$.select.$touch"
      @blur="v$.select.$touch"
    ></v-select>

    <v-btn
      class="me-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </v-form>

  <v-container >
    <v-row       
        class="mb-4"
        no-gutters
    >
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
  import { reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { required } from '@vuelidate/validators'
  import FlightDetail from '../components/FlightDetail.vue';
  import { useFlightStore } from './../stores/flight'

  const store = useFlightStore();

  const initialState = {
    name: '',
    select: null,
  }

  const state = reactive({
    ...initialState,
  })

  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ]

  const rules = {
    name: { required },
    select: { required },
    items: { required },
  }

  const v$ = useVuelidate(rules, state)

  function clear () {
    v$.value.$reset()
    store.clearResultSearch();
    for (const [key, value] of Object.entries(initialState)) {
      state[key] = value
    }
  }

  function submit(){
    store.searchFlight();
  }
</script>
