<template>
    
    <router-link to="/add">
        <div class="bg-tertiary rounded-sm p-1">
            <Icon icon="akar-icons:plus" class="text-3xl"/>
        </div>
    </router-link>
    
</template>

<script>

import { Icon } from '@iconify/vue';

export default {

    components: {
        Icon
    }

}
</script>