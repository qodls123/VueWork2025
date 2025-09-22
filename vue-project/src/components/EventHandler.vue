<template>
    <div>
        <button @click="increment">1 추가</button>
        <button @click="decrement">1 감소</button>
        <br>
        <p>숫자 값은: {{ count }}</p>
        <p>숫자 값은: {{ count222 }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const count = ref(0);
    let count222 = 1;
    function increment() {
        count.value++;
        count222++;
    }

    const decrement = () => {
        count.value--;
        count222--;
    };
</script>

<style lang="scss" scoped>

</style>