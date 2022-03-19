<template>
  
    <div>

    <div class="w-full flex justify-end px-10">

            <AnimeAdd></AnimeAdd>

    </div>

    <AnimeListContainer/>        

    </div>

</template>

<script>

import AnimeListContainer from './AnimeListContainer.vue'
import AnimeAdd from './AnimeAdd.vue'

export default {
    components:{
        AnimeListContainer,
        AnimeAdd
    }
}
</script>

<style>

</style>