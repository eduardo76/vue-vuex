<template>
  <div class="col-sm-3">
    <div class="thumbnail">
    <img class="vue-img" src="../assets/logo.png" alt="Vue Logo">
    <div class="caption">
      <h3>Counter: {{count}}</h3>
      <p>This component uses local states.</p>
      <p>
        <button class="btn btn-primary" role="button" @click="increase">Increase</button> <button href="#" class="btn btn-default" role="button" @click="decrease">Decrease</button>
      </p>
    </div>
    </div>
  </div>
</template>


<script>

export default {
    name: 'Counter',

    data() {
      return {
        count: 1
      }
    },
    
    methods: {
      increase() {
        this.count++
      },
      decrease() {
        this.count--
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