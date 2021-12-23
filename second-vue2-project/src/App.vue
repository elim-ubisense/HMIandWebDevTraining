<template>
  <div id="app">
    <app-base></app-base>
  </div>
</template>


<!-- The below const AppBase component is being lazy loaded
to allow SmartSpace to work: must have this in all Smart space HMI's
 -->
<script>
  const AppBase =()=> import("./AppBase.vue")

  export default {
    components:{AppBase},
  }
</script>

<style>

</style>
