<template>
  
        <Wave class="h-96 w-4/5 m-auto"/>

</template>

<script>

import Wave from "./backgrounds/Wave.vue"

export default {

    components: {
        Wave
    },
    data: function () {
        return {
            numComponents: 20
        }
    }

}
</script>

<style>

</style>