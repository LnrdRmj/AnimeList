<template>

  <!-- Body -->
  <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full">

    <Header/>

    <AnimeListContainer/>

  </div>  

</template>

<script>
import Header from './components/Header.vue'
import AnimeListContainer from './components/AnimeListContainer.vue'

export default {
  components: {
    Header,
    AnimeListContainer
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
