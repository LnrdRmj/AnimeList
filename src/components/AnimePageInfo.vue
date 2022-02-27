<template>

    <div>

        <div>Info di un anime WOOOOOOOOOO {{ $route.params.name }}</div>
        <img src="" alt="" id='anime-image'>

    </div>

</template>

<script>

import * as OverTransition from './../overTransition'

export default {
    mounted() {
        OverTransition.moveToDiv($('#anime-image'))
    },
}
</script>

<style>

</style>