<template>

        <div>

            <button class="bg-primary-100" @click="test()">
                cliccami
            </button>

            <Modal ref="modal"
                title="Prova"
                content="Corpo di prova"
            />

        </div>

</template>

<script>

import Modal from "./modal/Modal.vue";
import Modal1 from "./modal/Modal.vue";

export default {

    components: {
    Modal,
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
        },
        test: function () {

            this.$refs.modal.toggle()
            console.log(this.$refs.modal);

        }
    },

}
</script>

<style>

</style>