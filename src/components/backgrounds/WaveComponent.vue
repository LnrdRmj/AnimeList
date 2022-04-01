<template>
  
    <div class="flex flex-1 flex-col h-full">

        <div class="h-0" :style="paddingAnimation">

        </div>

        <div class="h-full bg-gradient-to-t from-secondary-500">

        </div>

    </div>


</template>

<script>
export default {

    props: ['delay'],
    computed: {

        paddingAnimation: function () {

            return {
                animationName: 'harmonicHeight',
                animationDuration: '2s',
                animationDelay: this.$props.delay + 'ms',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out'
            } 
        }

    }
}
</script>

<style>

    @keyframes harmonicHeight{

        50%{
            height: 250px;
        }

    }

    @keyframes cycleHeight {
        
        100%{
            margin-top: 20%;
            height: 80%;
        }

    }

</style>