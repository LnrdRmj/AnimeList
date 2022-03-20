<template>
  
    <div class="flex items-center justify-start w-full
                border-2 border-solid border-primary-500 rounded-lg
                p-3 mb-4">

        <div class="h-20 flex items-center">
            <img :src="resultData.images.jpg.image_url" :alt="resultData.title"
                    class="h-auto max-h-20 w-14">
        </div>

        <div class="mx-3 text-lg md:text-2xl text-tertiary">
            {{ resultData.title }}
        </div>

        <button @click="addAnime"> aggiungi </button>

    </div>

</template>

<script>

import axios from 'axios'

export default {
    props: ['resultData'],
    methods: {

        addAnime: function () {

            axios.put('http://localhost:3000/addAnime', {
                animeId: this.$props.resultData.mal_id
            })
            .then( (data) => {
                console.log('fatto')
                console.log(data)
            })
            .catch( function (error) {

                console.log(error)

            })

        }

    }
}
</script>

<style>

</style>