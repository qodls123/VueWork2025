<template>
    <div>
        <button @click="increment">
            {{ state.count }}
        </button>
    </div>
</template>

<script setup>
    import {reactive} from 'vue'
    const state = reactive({count:0})
    // const state = reactive(0)
    const increment = () => {
        state.count++
    }
</script>

<style lang="scss" scoped>

</style>