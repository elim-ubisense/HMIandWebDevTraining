<template>
  <div id="app">
    <app-base></app-base>
  </div>
</template>

<script>
  const AppBase =()=> import("./AppBase.vue")

  export default {
    components:{AppBase},
  }
</script>

<style>

</style>
