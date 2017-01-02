<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>

    <div class="container">
      <h3 class="page-header">Local States</h3>
      <div class="row">
        <counter v-for="n in 4"></counter>
      </div>

      <h3 class="page-header">Vuex States</h3>
      <div class="row">
        <counter-vuex v-for="n in 4"></counter-vuex>
      </div>
    </div>

  </div>
</template>

<script>
import Hello from './components/Hello'
import Counter from './components/Counter'
import CounterVuex from './components/CounterVuex'

export default {
  name: 'app',

  mounted() {
    // This is called here to show the states changing from outside the component
    // at the same time that it can be changed from inside of it
    this.autoCount() 
  },

  components: {
    Hello,
    Counter,
    CounterVuex
  },

  methods: {
    autoCount() {
      setInterval(() => {
        this.$store.dispatch('increase')
      }, 1000)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
