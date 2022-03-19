<template>

    <div class='p-4'>

        <div class="font-extrabold p-4 w-full text-center
                    text-3xl sm:text-5xl">
            {{ anime.title }}
        </div>
        
        <div class='flex flex-col items-center
                    xs:flex-row xs:justify-start'>

            <img :src="anime.imageUrl" alt="" id='anime-image' 
                class='w-fit duration-500
                        h-96
                        md:h-[30rem]
                        lg:h-[40rem]' :style="imageState">

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
            imageOpacity: 0
        }
 
    },
    created: function() {

        this.anime = animeData[this.$route.params.name]

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