<template>
    <div>
        <div v-bind="objectOfAttrs">div</div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    const objectOfAttrs = {
        id:'container',
        class:'wrapperrrrrrrrrrr'
    }
</script>

<style scoped>

</style>