<template>
    <div>
        {{ a }}, {{ b }}
    </div>
    <div v-if="shown">
        Shown!
    </div>
</template>

<script setup>
    import {ref, defineExpose} from 'vue'
    const a = 1
    const b = ref(2)
    const shown = ref(false)
    const open = () => (shown.value = true)
    const close = () => (shown.value = false)
    defineExpose({a,b,open,close})
</script>

<style lang="scss" scoped>

</style>