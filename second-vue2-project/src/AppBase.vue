<!-- Created this AppBase.vue to hold the bulk of the coding.
 Allows us to lazyload 
 -->

<template>
  <div id="app">
  <div> Here's a map</div>
  {{ test }}
  <ubi-map></ubi-map>

  </div>  
</template>

<script>
  export default {
    mixins: [
      window.UbiHMI.mixin({
        testSearch: {search: "Test"},
      })
    ],
    computed: {
      test() {
        return Object.entries(this.testSearch.rows).map(a => {
          let sum = a[1].Summary
          return {
            name: sum[0],
            age: sum[1]
          }
        })
      }
    }
  }
</script>

<style>

</style>