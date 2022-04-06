<template>
  
    <div class=" absolute right-0 top-0 translate-x-1/2 -translate-y-1/2
                duration-500"
                @click.prevent="showOptions($event)">

        <div class="relative group" tabindex="1">
 
            <div hidden class="group-focus:top-[40px] group-focus:top-[80px]"></div>

            <ActionButton   icon='ci:settings-filled' :round="true"
                            class="z-10 group-focus:rotate-180 duration-500 peer"
                            />

            <ActionButton v-for="(option, index) in options" :key="option.icon"
                            :icon="option.icon"
                            ref="options"
                            :round="true"
                            @click.prevent="option.onclick"
                            class=" absolute top-0 -z-10
                                    group-focus:rotate-[360deg]
                                    duration-500
                                    hover:animate-wiggle
                            "
                            :class='"group-focus:top-[" + ( (index + 1) * 40) + "px]"'
                            />

        </div>

    </div>

</template>

<script>

import ActionButton from "../ActionButtons/ActionButton.vue"

export default {
    components: {
        ActionButton
    },
    data: function () {
        return {
            options: [
                {
                    name: 'like',
                    icon: 'akar-icons:heart',
                    onclick: this.like
                },
                {
                    name: 'delete',
                    icon: 'fluent:delete-28-regular',
                    onclick: this.delete
                }
            ]
        }
    },
    methods: {
        showOptions : function () {

            this.applyCSSChanges()

        },
        applyCSSChanges : function () {



        },
        like: function (){



            console.log('like on anime');

        },
        delete: function (){

            console.log('delete on anime');

        } 
    }
}
</script>

<style>

</style>