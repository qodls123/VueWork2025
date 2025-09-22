<template>
    <div>당신은 {{ count }}번 눌렀다</div>
    <button @click="count++" style="width:200px; margin: 5px;">+</button>
    <button @click="count--" style="width:200px; margin: 5px;">-</button>
</template>

<script setup>
    import { ref} from 'vue';

    const count = ref(0);
</script>

<style  scoped>

</style>