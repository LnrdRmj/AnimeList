<template>
    
    <!-- Per fare il bordo gradient -->
    <div class="bg-white p-[10px] m-10 -z-10
                rounded-md
                bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <!-- Container delle card -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-10
                    border-0 border-solid
                    p-5 duration-75
                    bg-white">
            
            <AnimeCard title="Attack on Titan" description="Bell'anime" image-url="https://m.media-amazon.com/images/I/51K4w8DY5cL._AC_.jpg"/>
            <AnimeCard title="Bungo stray dogs" description="Bell'anime" image-url="https://m.media-amazon.com/images/I/71H0CwQBgiL._AC_SX425_.jpg"/>
        
        </div>
    </div>

</template>

<script>

import AnimeCard from './AnimeCardInfo.vue'

export default {
    components: {
        AnimeCard
    }
}
</script>

<style>

</style>