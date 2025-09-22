<template>
    <div v-bind:id="dynamicId1">{{ dynamicId1 }}</div>
    <div :id="id">{{ id }}</div>
    <div v-bind:id>{{ id }}</div>
    <div v-bind:id="id">{{ id }}</div>
</template>

<script setup>
    import {ref} from 'vue';
    const dynamicId1 = "div1";
    const id = "div2";
</script>

<style scoped>

</style>