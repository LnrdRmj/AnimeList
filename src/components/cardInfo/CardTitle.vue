<template>
  
    <div class='text-2xl text-center flex justify-center items-end
                        h-72 -m-48 mb-2 pb-3 w-full
                        rounded-lg border-none
                        duration-500
                        bg-gradient-to-t from-secondary-500
                        relative'>

        <!-- <Wave class="absolute -z-10"/> -->

        <div class="text-secondary-50">{{ title }}</div>

    </div>

</template>

<script>

import Wave from "../backgrounds/Wave.vue"

export default {
    props: ['title'],
    components: {
        Wave
    }
}
</script>

<style>

</style>