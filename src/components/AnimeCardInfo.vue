<template>
    
    <div class='flex flex-col
                border-teal-600 border-solid border-2
                h-full delay-1000'>
                
        <div class='text-xl text-center h-12 flex justify-center content-center'><div>{{ title }}</div></div>

        <div class='overflow-hidden h-full'>
            <img :src="imageUrl" :alt="title" class='h-full w-full'>
        </div>

    </div>

</template>

<script>
export default {
    props:['title', 'description', 'image-url']
}
</script>

<style scoped>



</style>