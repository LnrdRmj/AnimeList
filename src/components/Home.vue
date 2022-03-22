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
import animeData from '../animeList.json'

export default {
    components:{
        AnimeListContainer,
        AnimeAdd,
        SearchBar
    },
    data: function () {
        return {
            animeData: animeData,
            filteredAnimes: animeData,
        }
    },
    methods: {
        filter: function (toFilter) {

            this.normalizeToSearch(toFilter);

            if (toFilter === '') {
                this.filteredAnimes = this.animeData
                return
            }

            let filteredEntries = Object.entries(this.animeData).filter( (entry) => {

                return entry[1].title?.toLowerCase().includes(toFilter) || entry[1].title_english?.toLowerCase().includes(toFilter)

            })

            this.filteredAnimes = Object.fromEntries(filteredEntries)

        },
        normalizeToSearch: function (toFilter) {

            toFilter = toFilter.toLowerCase()

        }
    }
}
</script>

<style>

</style>