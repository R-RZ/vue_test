<template>
  <div id="app">
    <count></count>
  </div>
</template>

<script>
import count from './components/count.vue'


export default {

  name: 'App',
  components: {
    count
  },
  mounted() {
    // console.log('App ', this);
  },
}
</script>

