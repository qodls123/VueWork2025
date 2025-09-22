<template>
    <div>
        <div class="ma-4">
            <ChildExpose ref="child" />
            <div>child ref: {{ child }}</div>
            <v-btn @click="test">테스트</v-btn>
            <v-btn @click="close">close</v-btn>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import ChildExpose from '@/components/ChildExpose.vue';

    const child = ref(null)
    const test = () => {
        console.log(child.value)
        child.value.open()
    }
    const close = () => {
        console.log(child.value)
        child.value.close()
    }
</script>

<style lang="scss" scoped>

</style>