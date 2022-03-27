<template>
  
    <div class="flex items-center justify-start w-full
                border-2 border-solid border-primary-500 rounded-lg
                p-3 mb-4">

        <div class="h-30 flex items-center">
            <img :src="resultData.images.jpg.image_url" :alt="resultData.title"
                    class="h-auto max-h-30 w-20">
        </div>

        <div class="mx-3 text-lg md:text-2xl text-tertiary">
            {{ resultData.title_english || resultData.title }}
        </div>

        <button @click="addAnime"> aggiungi </button>

    </div>

</template>

<script>

import * as AnimeApi from './../animeAPI/animeApi'

export default {
    props: ['resultData'],
    methods: {

        addAnime: async function () {

            let anime = this.$props.resultData

            AnimeApi.addAnime(anime) 

            console.log(await DB.db.animes.toArray())

        }

    }
}
</script>

<style>

</style>