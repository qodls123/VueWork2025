<template>
    <div>
        <button @click="mutateDeeply">trigger </button>
        <div>{{ obj.nested.count }}</div>
        <div>{{ obj.arr }}</div>
        <div>nested-nested: {{ obj.nested.nested }}</div>
    </div>
</template>

<script setup>
    import {ref} from 'vue';

    const obj = ref({
        nested: {count:0, nested: ['a','b']},
        arr: ['foo','bar']
    })

    const mutateDeeply = () => {
        obj.value.nested.count++
        obj.value.arr.push('baz')
        obj.value.nested.nested.push('c')
    }
</script>

<style lang="scss" scoped>

</style>