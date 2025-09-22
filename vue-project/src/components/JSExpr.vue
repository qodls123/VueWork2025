<template>
    <div>{{ Number + 1 }}</div>
    <div>{{ ok ? '예': '아니오' }}</div>
    <div>{{ message.split('').reverse().join('') }}</div>
    <div :id="`list-${id}`">div{{ `list-${id}` }}</div>
</template>

<script setup>
    import {ref} from 'vue';
    const Number = 1;
    const ok = true;
    const message = '안녕하십니까';
    const id = 7;
</script>

<style scoped>

</style>