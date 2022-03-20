<template>
  
    <div class="flex flex-col justify-center items-center pt-20 w-11/12 sm:w-1/2 m-auto">

        <SearchBar @typed="search" class="mb-10"></SearchBar>

        <SearchResult v-for="result in searchResult" :key="result.title" :resultData="result"/>

    </div>

</template>

<script>

import SearchBar from './SearchBar.vue'
import SearchResult from './SearchResult.vue'
import axios from 'axios'

export default {
    data: function (){

        return {
            searchResult: [],
        }

    },
    components: {
        SearchBar,
        SearchResult
    },
    methods: {
        search: function(toSearch) {

            if (!this.valid(toSearch)) return;

            var options = {
                method: 'GET',
                url: '/api/anime',
                params: {q: toSearch},
                headers: {
                    "Access-Control-Allow-Origin" : "*",
                    'x-rapidapi-host': 'jikan1.p.rapidapi.com',
                    'x-rapidapi-key': '2f5006fe38mshc85f9f66949f01ep1420b7jsnbf705c1ce8b3',
                }
            };

            axios.request(options).then((response) => {
                
                console.log(response.data.data);
                this.searchResult = response.data.data;

            })
            .catch(function (error) {
                console.error(error);
            });

        },
        valid: function (toSearch) {

            if (toSearch == '') return false

            return true

        }
    }
}
</script>

<style>

</style>