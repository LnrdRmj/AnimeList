<template>
    
    <div class="p-10 flex flex-col items-center">

        <!-- Per fare il bordo gradient -->
        <!-- <div class="bg-white p-[10px] my-10 -z-10
                    rounded-md
                    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 -->
            <!-- Container delle card -->

            <div class="flex justify-evenly items-center 
                        w-full h-5">
                
                <div class="border-2 border-solid mb-8 border-secondary-900 w-full mx-10"></div>

            </div>


            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-16 gap-y-10
                        border-4 border-solid border-secondary-900 border-b-0 border-t-0
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