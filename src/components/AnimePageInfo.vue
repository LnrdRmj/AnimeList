<template>

    <div class='p-4'>

        <div class="text-2xl font-extrabold p-4"> {{ anime.title }}</div>
        
        <div class='flex flex-col xs:flex-row'>

            <img :src="anime.imageUrl" alt="" id='anime-image' class='h-96 w-auto'>

            <div class='p-4'>
                <p>{{ anime.description }}</p>
            </div>

        </div>
        

    </div>

</template>

<script>

import * as OverTransition from './../overTransition'
import animeData from '../animeList.json'

export default {
    data: function () {
        return {
            anime: null,
        }

    },
    created: function() {

        this.anime = animeData[this.$route.params.name]

    },
    mounted() {
        OverTransition.moveToDiv($('#anime-image'))
    },
}
</script>

<style>

</style>