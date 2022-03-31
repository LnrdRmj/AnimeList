<template>

  <!-- Body -->
  <div class="bg-primary-900 h-full min-h-screen text-secondary-900">
    <Header/>

    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component"/>
        </transition>
    </router-view>

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

body{
    background: rgb(236,72,153);
    background: linear-gradient(94deg, rgba(168,85,247,1) 0%, rgba(99,102,241,1) 50%, rgba(236,72,153,1) 100%);
    background: var(--primary-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  display: none;
}

</style>
