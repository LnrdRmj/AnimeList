<template>
  
    <div @click.prevent="showOptions($event)"
        class=" absolute right-0 top-0 translate-x-1/2 -translate-y-1/2
                duration-500 focus:rotate-45 active:rotate-[180deg]">

        <ActionButton  icon='ci:settings-filled' :round="true"/>

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

        }
    },
    methods: {
        showOptions : function (event) {

            this.applyCSSChanges()

        },
        applyCSSChanges : function () {



        }
    }
}
</script>

<style>

</style>