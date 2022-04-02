<template>
  
    <div class="bg-tertiary p-1" :class="classes">
        <Icon :icon="icon || 'emojione:question-mark'" class="text-3xl"/>
    </div>

</template>

<script>

import { Icon } from "@iconify/vue"

export default {
    props: ['icon', 'round'],
    data: function () {
        return {
            borderStyle: ''
        }
    },
    components: {
        Icon
    },
    created: function () {

        if (this.$props.round === true)
            this.borderStyle = 'rounded-full'
        else
            this.borderStyle = 'rounded-sm'

    },
    computed:{
        classes: function () {

            return this.borderStyle;

        }
    }
}
</script>

<style>

</style>