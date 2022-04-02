<template>

    <div class='p-4'>

        <div class="font-extrabold p-4 w-full text-center
                    text-3xl sm:text-5xl">
            {{ anime.title || 'loading' }}
        </div>
        
        <div class='flex flex-col items-start
                    xs:flex-row xs:justify-start'>

            <div class="flex justify-center items-center w-full xs:w-auto">

                <img :src="anime.images.jpg.large_image_url" alt="" id='anime-image' 
                    class='w-fit duration-500
                            h-96
                            md:h-[30rem]
                            lg:h-[40rem]' :style="imageState">

            </div>

            <div class="flex flex-col w-full flex-1">

                <div class="flex justify-center items-center">

                    <router-link to="/">
                        <Remove @click="removeAnime"></Remove>
                    </router-link>

                </div>

                <div class='p-4 m-auto w-full
                            border-2 border-solid border-l-0'>
                    <p class="text-lg font-bold"> da mettere qualcosa </p>
                </div>

            </div>

        </div>

    </div>

</template>

<script>

import * as OverTransition from './../overTransition'
import * as AnimeAPI from '../animeAPI/animeApi' 
import Remove from './ActionButtons/Remove.vue'
import { Icon } from '@iconify/vue'

export default {
    components: {
        Remove,
        Icon
    },
    data: function () {
        return {
            anime: null,
            imageOpacity: 0
        }
    },
    created: async function() {
        
        this.anime = await AnimeAPI.getAnime(this.$route.params.id)

    },
    mounted() {

        setTimeout(() => {
            
            try{

                OverTransition.moveToDiv($('#anime-image')).then( () => {

                    this.showImage()

                })

            }
            catch(e){

                this.showImage()

            }

        }, 100);
        
    },
    methods: {

        showImage: function () {
            this.imageOpacity = 1;
        },
        removeAnime: async function () {

            await AnimeAPI.removeAnime(this.anime.mal_id)

        }

    },
    computed: {
        
        imageState: function (){
            return {
                opacity: this.imageOpacity
            }
        }

    }
}
</script>

<style>

</style>