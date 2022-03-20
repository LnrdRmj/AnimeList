<template>
  
    <div class="flex flex-col justify-center items-center pt-20">

        <SearchBar @typed="search"></SearchBar>

        <div v-for="result in searchResult" :key="result.title" class="text-white">

            ciao {{ result.title }}

        </div>

    </div>

</template>

<script>

import SearchBar from './SearchBar.vue'
import axios from 'axios';

export default {
    data: function (){

        return {
            searchResult: [],
            a: [ 1, 2, 3, 4]
        }

    },
    components: {
        SearchBar
    },
    methods: {
        search: function(toSearch) {

            var options = {
                method: 'GET',
                url: '/api/anime',
                params: {q: toSearch},
                headers: {
                    'x-rapidapi-host': 'jikan1.p.rapidapi.com',
                    'x-rapidapi-key': '2f5006fe38mshc85f9f66949f01ep1420b7jsnbf705c1ce8b3',
                }
            };

            var t = this;

            axios.request(options).then((response) => {
                
                console.log(response.data.data);
                this.searchResult = response.data.data;

            }).catch(function (error) {
                console.error(error);
            });

        }
    }
}
</script>

<style>

</style>