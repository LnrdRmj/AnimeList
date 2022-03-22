<template>
  
    <div class="h-12 rounded-md flex items-center justify-evenly bg-tertiary relative w-full" @keyup.enter="emitTypedEvent">

        <Icon icon="codicon:search" class="text-3xl m-3 text-black"/>

        <div class="relative h-full w-full mr-3">

            <input type="text" v-model="toSearch" @input="inputChanged" class="peer h-full w-full rounded-md bg-tertiary text-3xl focus:outline-none text-black"/>

            <div class="h-1 bg-black absolute duration-500 bottom-1
                        peer-focus:opacity-100 peer-focus:w-full
                        opacity-0 w-1/5"></div>

        </div>

    </div>

</template>

<script>

import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon,
    },
    props: ['delaySearch'],
    data: function (){
        return {
            toSearch: null,
            searching: null,
            delaySearch: null,
            defaultDelatySearch: 500
        }
    },
    created: function () {

        this.delaySearch = this.$props.delaySearch === null ? this.defaultDelatySearch : this.$props.delaySearch

    },
    methods: {
        inputChanged: function (event) {

            clearTimeout(this.searching)

            this.searching = setTimeout( this.emitTypedEvent , this.delaySearch);

        },
        emitTypedEvent: function () {

            this.$emit('typed', this.toSearch);

        }
    }
}
</script>

<style>

</style>