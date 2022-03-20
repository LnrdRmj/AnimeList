<template>
  
    <div class="h-12 w-11/12 sm:w-1/2 rounded-md flex items-center justify-evenly bg-tertiary relative">

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
import axios from 'axios';

export default {
    components: {
        Icon,
    },
    data: function (){
        return {
            toSearch: null,
            searching: null,
            delaySearch: 500
        }
    },
    methods: {
        inputChanged: function (event) {

            clearTimeout(this.searching)

            this.searching = setTimeout( () => {
                
                this.$emit('typed', this.toSearch);

            }, this.delaySearch);

        },
        search: function () {

            var options = {
                method: 'GET',
                url: '/api/anime',
                params: {q: this.toSearch},
                headers: {
                    'x-rapidapi-host': 'jikan1.p.rapidapi.com',
                    'x-rapidapi-key': '2f5006fe38mshc85f9f66949f01ep1420b7jsnbf705c1ce8b3',
                }
            };

            axios.request(options).then(function (response) {
                
                console.log(response.data);
                this.$emit('result', { email, password })

            }).catch(function (error) {
                console.error(error);
            });

        }
    }
}
</script>

<style>

</style>