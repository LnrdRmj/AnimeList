<template>
  
    <div class="flex items-center justify-start w-full
                border-2 border-solid border-primary-500 rounded-lg
                p-3 mb-4">

        <div class="h-20 flex items-center">
            <img :src="resultData.images.jpg.image_url" :alt="resultData.title"
                    class="h-auto max-h-20 w-14">
        </div>

        <div class="mx-3 text-lg md:text-2xl text-tertiary">
            {{ resultData.title }}
        </div>

    </div>

</template>

<script>
export default {
    props: ['resultData'],
}
</script>

<style>

</style>