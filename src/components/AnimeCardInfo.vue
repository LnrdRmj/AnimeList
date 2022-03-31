<template>
    
    <router-link :to='"/animeInfo/" + anime.mal_id'>

        <div class='group flex flex-col justify-center items-center
                    h-full opacity-0'
                    :style='animationStyle'
                    :id='this.id'>
                    
            <div class='h-full w-11/12 z-10 
                        flex justify-center 
                        group-hover:scale-110 duration-500'>
                <img :src="anime.images.jpg.large_image_url" :alt="anime.title_english" class='w-52 h-auto' @click="goingToNextPage($event)">
            </div>

            <div class='text-2xl text-center flex justify-center items-end
                        h-72 -m-36 mb-2 pb-3 w-full
                        rounded-lg border-none
                        duration-500
                        bg-gradient-to-t from-secondary-500'>

                <div class="text-secondary-50">{{ anime.title_english }}</div>

            </div>

        </div>

    </router-link>

</template>

<script>
import * as OverTransition from './../overTransition'

export default {
    props:['anime', 'pos'],
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