<template>
    
    <!-- Outside of modal -->
    <div v-if="active" class="absolute 
                h-full w-full
                top-0  left-0
                flex justify-center items-center scale-100"
            @click="outside"
            ref="modalContainer">

        <!-- Actual modal -->
        <div class="bg-tertiary rounded-lg h-52 w-[30rem] 
                    p-6
                    flex flex-col justify-between items-center
                    animate-pop"
            ref="modal"
            @click.stop="inside">

            <!-- title -->
            <div class="text-3xl font-bold">

                {{ this.title }}

            </div>

            <!-- body -->
            <div class="text-lg font-semibold">

                {{ content }}

            </div>

            <!-- buttons -->
            <div class="w-full
                        flex justify-evenly">

                <ModalButton label="Confirm" @click="confirmed"/>
                
                <ModalButton label="Nevermind" @click="refused"/>
            
            </div>

        </div>

    </div>

</template>

<script>

import ModalButton from './ModalButton.vue'

export default {
    props: ['pTitle', 'pContent'],
    components: {
        ModalButton
    },
    data: function () {
        return {
            active: false,
            title: null,
            content: null
        }
    },
    mounted: function () {

        this.title = this.pTitle
        this.content = this.pContent

    },
    methods: {
        confirmed: function () {

            this.close()

            this.$emit('confirmed')
        },
        refused: function () {
            this.$emit('refused')
        },
        show: function(options) {

            this.parseShowOptions(options);

            this.active = true
        },
        parseShowOptions: function (options) {

            if (options.title) this.title = options.title
            if (options.content) this.content = options.content

        },
        close: function() {

            let modalContainer = $(this.$refs.modalContainer)
            modalContainer.animate({
                opacity: '0'
            }, 250, 'linear', () => {
                this.active = false
                modalContainer.css('opacity', '1')
            })

        },
        toggle: function () {
            this.active = !this.active
        },
        inside: function () {
            
        },
        outside: function () {
            this.close();
        }
    }
}
</script>

<style>

</style>