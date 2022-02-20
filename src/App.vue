<template>

  <!-- Body -->
  <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full">

    <Header/>

    <router-view></router-view>

    <!-- <AnimeListContainer/> -->

  </div>  

</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

</style>
