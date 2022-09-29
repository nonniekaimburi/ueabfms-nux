<template>
    <div class="flex ">
        <div>
            <Sidebar1/>
        </div>
        <div>
            <slot/>
        </div>

    </div>
</template>

<script setup>
import Sidebar1 from '~~/components/sidebar.vue';

</script>

<style lang="scss" scoped>

</style>