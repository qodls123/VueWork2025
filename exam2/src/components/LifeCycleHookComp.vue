<template>
    <div>
        <div>count: {{ count }}</div>
        <v-btn class="ma-2" prepend-icon="$vuetify" @click="update">업데이트</v-btn>
        <v-btn class="ma-2" prepend-icon="$vuetify" @click="update">언마운트</v-btn>
    </div>
</template>

<script setup>
    import { onMounted, onUnmounted, onUpdated, ref } from 'vue';
    onMounted(() => {console.log('컴포넌트가 마운트 됐음')})
    onUpdated(() => {console.log('컴포넌트가 업데이트 됐음')})
    onUnmounted(() => {console.log('컴포넌트가 언마운트 됐음')})
    const count = ref(0)
    const update = () => {count.value++}
    const emit = defineEmits(['unmountEvt'])
    const unmount = () => {emit('unmountEvt')}
</script>

<style lang="scss" scoped>

</style>