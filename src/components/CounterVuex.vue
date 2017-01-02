<template>
  <div class="col-sm-3">
    <div class="thumbnail">
    <img class="vue-img" src="../assets/logo.png" alt="Vue Logo">
    <div class="caption">
      <h3>Counter: {{count}}</h3>
      <p>This component is an example showing how Vuex shares its data sources.</p>
      <p>
        <button class="btn btn-primary" role="button" @click="increase">Increase</button> <button href="#" class="btn btn-default" role="button" @click="decrease">Decrease</button>
      </p>
    </div>
    </div>
  </div>
</template>


<script>

export default {
    name: 'CounterVuex',

    methods: {
      increase() {
        this.$store.dispatch('increase')
      },
      decrease() {
        this.$store.dispatch('decrease')
      }
    },

    computed: {
      count() {
        return this.$store.getters.counter
      }
    }
}

</script>

<style scoped>
  .vue-img {
    width: 30%;
    height: 30%;
  }
</style>