<template>
    
    <a :href='"#/animeInfo/" + anime.mal_id' style="-webkit-tap-highlight-color: transparent;">

        <div class='group flex flex-col justify-center items-center
                    h-full opacity-0'
                    :style='animationStyle'
                    :id='this.id'>
                    
            <div class='z-10 relative
                        flex justify-center 
                        duration-500'>

                <CardOptions 
                    @option="handleOption"/>
                
                <img :src="anime.images.jpg.large_image_url" :alt="anime.title_english" class='w-48 xs:w-52 h-auto' @click.self="goingToNextPage($event)">
            
            </div>

            <CardTitle :title="anime.title_english"/>

        </div>

    </a>

</template>

<script>
import * as OverTransition from '../../overTransition'
import CardTitle from './CardTitle.vue'
import CardOptions from './CardOptions.vue'
import * as AnimeOptions from "../../option/options"
import * as API from "../../animeAPI/animeApi.js"

export default {
    props:['anime', 'pos'],
    components: {
        CardTitle,
        CardOptions
    },
    data() {
        return {
            delay: 100,
            animationName: 'none',
            id: '',
        }
    },
    methods:{
        show: function(){ this.animationName = 'fadein' },
        goingToNextPage: function(event){

            OverTransition.cloneToOverTransition($(event.srcElement));
            console.log($(event.srcElement).width());

        },
        handleOption: function (param) {

            console.log(param)

            if (param == AnimeOptions.DELETE){

                this.deleteAnime()

            }
            else if(param == AnimeOptions.LIKE){

            }

        },
        deleteAnime: function () {

            API.removeAnime(anime.id)

        }
    },
    computed:{
        animationStyle: function(){
            return {
                animationName: this.animationName,
                animationDuration: '1s',
                animationFillMode: 'forwards',
            }
        },
    },
    created: function(){

        this.id = 'anime-card-' + this.pos;

    },
    mounted: function () {

        var that = this // Very scuffed

        setTimeout(() => {
            
            var observer = new IntersectionObserver(function(entries) {

                // isIntersecting is true when element and viewport are overlapping
                // isIntersecting is false when element and viewport don't overlap
                if(entries[0].isIntersecting === true)
                    that.show()
  
            }, { threshold: [0.1] })

            observer.observe(this.$el)

        }, 100); // Questo delay serve perchè per una frazione di secondo tutti i div sono ad altezza 0 e risultano dentro la portview

    }
}
</script>

<style>

    @keyframes fadein {
        
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }

    }

</style>