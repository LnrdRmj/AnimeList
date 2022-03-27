<template>
  
    <div class="bg-tertiary rounded-sm p-1">
        <Icon :icon="icon || 'emojione:question-mark'" class="text-3xl"/>
    </div>

</template>

<script>

import { Icon } from "@iconify/vue"

export default {
    props: ['icon'],
    components: {
        Icon
    }
}
</script>

<style>

</style>