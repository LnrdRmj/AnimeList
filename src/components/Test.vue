<template>
  
    <Modal
        title="Elimare l'anime?"
        content="sei sicuro di voler eliminare l'anime?"
        @confirmed="confirmed"
        @refused="refused"
        ></Modal>

</template>

<script>

import Modal from "./modal/Modal.vue";

export default {

    components: {
        Modal
    },
    data: function () {
        return {
            numComponents: 20
        }
    },
    methods: {
        confirmed: function () {
            console.log('confermato')
        },
        refused: function () {
            console.log('nevermind')
        }
    },

}
</script>

<style>

</style>