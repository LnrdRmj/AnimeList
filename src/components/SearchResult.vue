<template>
  
    <div class="flex items-center justify-between w-full
                border-2 border-solid border-primary-500 rounded-lg
                p-3 mb-4 h-32">

        <div class="flex items-center flex-col bg-black w-3/12">
            <img :src="resultData.images.jpg.image_url" :alt="resultData.title"
                    class="w-full">
        </div>

        <div class="mx-3 text-lg md:text-2xl text-tertiary w-6/12">
            <p class="text-center">
                {{ resultData.title_english || resultData.title }}
            </p>
        </div>

        <div class="flex w-1/12 mr-4">
            <ActionButton @click="addAnime" icon="akar-icons:plus"/>
        </div>


    </div>

</template>

<script>

import * as AnimeApi from './../animeAPI/animeApi'
import ActionButton from './ActionButtons/ActionButton.vue'

export default {
    props: ['resultData'],
    components: {
        ActionButton
    },
    methods: {

        addAnime: async function () {

            let anime = this.$props.resultData

            AnimeApi.addAnime(anime) 

        }

    }
}
</script>

<style>

</style>