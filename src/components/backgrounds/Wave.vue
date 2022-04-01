<template>
  
    <div class="h-full w-full flex justify-evenly">
        <WaveComponent v-for="index in this.numWaves" :key="index" :delay="index * this.delay"/>
    </div>

</template>

<script>

import WaveComponent from "./WaveComponent.vue"

export default {
    components: {
        WaveComponent
    },
    data: function () {
        return {
            numWaves: 10,
            delay: 250
        }
    }

}
</script>

<style>

</style>