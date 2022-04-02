<template>
  
    <div class="parent" @click="showAlert('parent clicked')">
        <span class="child" @click="showAlert('child1 clicked')">Child1</span>
        <span class="child" @click.stop="showAlert('child2 clicked')">Child2</span>
        <span class="child" @click.stop="showAlert('child3 clicked')">Child3</span>
    </div>

</template>

<script>

import Wave from "./backgrounds/Wave.vue"

export default {

    components: {
        Wave
    },
    data: function () {
        return {
            numComponents: 20
        }
    },
    methods: {
        showAlert(str) {
            alert(str);
        },
    },

}
</script>

<style>

</style>