<template>
    <div>
        <div class="ma-2" :style="{ color: activeColor, fontSize: fontSize + 'px'}">바인딩#1</div>
        <div class="ma-2" :style="{ 'font-size': fontSize + 'px'}">바인딩#2</div>
        <div class="ma-2" :style="styleObject">바인딩#3</div>
        <v-btn @click="togglePlus">버튼+</v-btn>
        <v-btn @click="toggleMinus">버튼-</v-btn>
    </div>
</template>

<script setup>
    import {ref, reactive} from 'vue'
    const activeColor = ref('blue')
    const fontSize = ref(30)

    const styleObject = reactive({
        color: 'blue',
        fontSize: '13px'
    })

    const togglePlus = () => {
        fontSize.value++
        styleObject.fontSize = parseInt(styleObject.fontSize.trimEnd('px')) + 1 + 'px'
    }

    const toggleMinus = () => {
        fontSize.value--
        styleObject.fontSize = parseInt(styleObject.fontSize.trimEnd('px')) - 1 + 'px'
    }
</script>

<style lang="scss" scoped>

</style>