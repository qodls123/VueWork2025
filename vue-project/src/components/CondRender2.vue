<template>
    <div>
        <button @click="toggle">전환</button>
        <h1 v-if="type === 'A'" class="a">A!</h1>
        <h1 v-else-if="type === 'B'" class="b">B!</h1>
        <h1 v-else-if="type === 'C'" class="c">C!</h1>
        <h1 v-else class="d">A/B/C 아님</h1>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    const type = ref('A');
    const toggle = () => {
        switch(type.value) {
            case 'A': type.value = 'B'; break;
            case 'B': type.value = 'C'; break;
            case 'C': type.value = 'D'; break;
            default: type.value = 'A';break;
        }
    }
</script>

<style scoped>
    .a {
        background-color: red;
    }
    .b {
        background-color: aqua;
    }
    .c {
        background-color: bisque;
    }
    .d {
        background-color: yellow;
    }
</style>