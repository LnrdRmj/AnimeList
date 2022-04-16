<template>
  
    <div class="bg-tertiary rounded-lg h-52 w-[30rem] 
                absolute 
                top-1/2 -translate-y-1/2
                left-1/2 -translate-x-1/2
                p-6
                flex flex-col justify-between items-center">

        <!-- title -->
        <div class="text-3xl font-bold">

            {{ title }}

        </div>

        <!-- body -->
        <div class="text-lg font-semibold">

            {{ content }}

        </div>

        <!-- buttons -->
        <div class="w-full
                    flex justify-evenly">

            <ModalButton label="confirm" @click="confirmed"/>
            
            <ModalButton label="Nevermind" @click="refused"/>
        
        </div>

    </div>

</template>

<script>

import ModalButton from './ModalButton.vue'

export default {
    props: ['title', 'content'],
    components: {
        ModalButton
    },
    mounted: function () {
        this.$props.title = 'prova'
    },
    methods: {
        confirmed: function () {
            this.$emit('confirmed')
        },
        refused: function () {
            this.$emit('refused')
        }
    }
}
</script>

<style>

</style>