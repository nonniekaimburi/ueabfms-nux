<template>
    <div class="flex ">
        <div>
            <Sidebar1/>
        </div>
        <div class="pl-4 pr-4 w-full">
            <Navbar1/>
            <slot/>
        </div>

    </div>
</template>

<script setup>
import Navbar1 from '~~/components/navbar.vue';
import Sidebar1 from '~~/components/sidebar.vue';

</script>

<style lang="scss" scoped>

</style>