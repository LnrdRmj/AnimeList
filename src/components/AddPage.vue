<template>
  
    <div class="flex flex-col justify-center items-center pt-20 w-11/12 sm:w-1/2 m-auto">

        <SearchBar @typed="search" class="mb-10"></SearchBar>

        <SearchResult v-for="result in searchResult" :key="result.title" :resultData="result"/>

    </div>

</template>

<script>

import SearchBar from './SearchBar.vue'
import SearchResult from './SearchResult.vue'
import * as AnimeApi from './../animeAPI/animeApi'

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

            AnimeApi.search(toSearch).then((response) => {
                
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