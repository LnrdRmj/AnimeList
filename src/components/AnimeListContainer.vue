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

            <AnimeCard v-for="anime in animeData" :key="anime.title"
                :title="anime.title"
                :image-url="anime.imageUrl"/>
            
        </div>
    </div>

</template>

<script>

import AnimeCard from './AnimeCardInfo.vue'
import animeData from '../animeList.json'

export default {
    components: {
        AnimeCard
    },
    data: function (){
        return {
            animeData: animeData
        }
    }
    ,created: function () {



    }
}
</script>

<style>

</style>