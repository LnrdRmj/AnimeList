<template>
  
    <div>

        <div class="w-full flex justify-between items-center px-10">

                <div class="pr-3">
                    <SearchBar @typed="filter" :delaySearch="0"></SearchBar>
                </div>

                <AnimeAdd></AnimeAdd>

        </div>

        <AnimeListContainer :animes="filteredAnimes"/>

    </div>

</template>

<script>

import AnimeListContainer from './AnimeListContainer.vue'
import AnimeAdd from './AnimeAdd.vue'
import SearchBar from './SearchBar.vue'
import * as DB from '../animeAPI/db'
import * as AnimeAPI from '../animeAPI/animeApi'

export default {
    components:{
        AnimeListContainer,
        AnimeAdd,
        SearchBar
    },
    data: function () {
        return {
            animeData: null,
            filteredAnimes: null,
        }
    },
    created: async function () {

        this.animeData = await DB.getAllAnimes()
        this.filteredAnimes = this.animeData

    },
    methods: {
        filter: function (toFilter) {

            this.normalizeToSearch(toFilter);

            this.filteredAnimes = AnimeAPI.search(toFilter)

        },
        normalizeToSearch: function (toFilter) {

            toFilter = toFilter.toLowerCase()

        },
    }
}
</script>

<style>

</style>