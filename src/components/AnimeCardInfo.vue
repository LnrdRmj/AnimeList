<template>
    
    <router-link :to='"/animeInfo/" + title'>

        <div class='flex flex-col
                    border-teal-600 border-solid border-2
                    h-full opacity-0'
                    :style='animationStyle'
                    :id='this.id'
                     >
                    
            <div class='text-xl text-center flex justify-center content-center h-min'><div>{{ title }}</div></div>

            <div class='overflow-hidden h-full'>
                <img :src="imageUrl" :alt="title" class='h-full w-full' @click="goingToNextPage($event)">
            </div>

        </div>

    </router-link>

</template>

<script>
import * as OverTransition from './../overTransition'

export default {
    props:['title', 'description', 'image-url', 'pos'],
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