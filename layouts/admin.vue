<template>
    <div class="flex ">
        <div>
           <AdminSide1/>
        </div>
        <div class="pl-0 pr-1 w-full">
            <Navbar1/>
            <slot/>
        </div>

    </div>
</template>

<script setup>
import AdminSide1 from '~~/components/adminSide.vue';
import Navbar1 from '~~/components/navbar.vue';

</script>

<style lang="scss" scoped>

</style>