<template>
    
    <div class="p-10">

        <!-- Per fare il bordo gradient -->
        <!-- <div class="bg-white p-[10px] my-10 -z-10
                    rounded-md
                    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 -->
            <!-- Container delle card -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-16 gap-y-10
                        border-4 border-solid border-secondary-900 rounded-xl
                        p-5 duration-75">


                <AnimeCard v-for="anime in animes" :key="anime.title"
                    :anime="anime"/>
                
            </div>
        <!-- </div> -->

    </div>

</template>

<script>

import AnimeCard from './cardInfo/AnimeCardInfo.vue'

export default {
    props: ['animes'],
    components: {
        AnimeCard,
    },
    data: function (){
        return {
        }
    }
    ,created: function () {



    }
}
</script>

<style>

</style>