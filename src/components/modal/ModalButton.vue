<template>

    <button class="p-2 bg-primary-900 w-1/3 
                    text-tertiary capitalize 
                    border-4 
                    hover:border-4 hover:border-primary-400 duration-300">
        {{ label }}
    </button>

</template>

<script>
export default {
    props: ['label']
}
</script>

<style>

</style>