<template>
  
    <div class="h-12 w-1/2 rounded-md flex items-center justify-evenly bg-tertiary relative">

        <Icon icon="codicon:search" class="text-3xl m-3 text-black"/>

        <div class="relative h-full w-full">
            
            <input type="text" class="peer h-full w-full rounded-md bg-tertiary text-3xl focus:outline-none mx-3 text-black"/>

            <div class="h-1 bg-black absolute duration-500 bottom-1
                        peer-focus:opacity-100 peer-focus:w-full
                        opacity-0 w-1/5"></div>

        </div>


    </div>

</template>

<script>

import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon,
    }
}
</script>

<style>

</style>