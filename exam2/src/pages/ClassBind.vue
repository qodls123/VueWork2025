<template>
    <div @mouseenter="hoverOn"
        @mouseleave="hoverOff">
        <div class="static ma-2"
            :class="{active: isActive, 'text-danger': hasError}"
        >클래스 바인딩 예제</div>

        <div class="static ma-2"
            :class="classObject"
        >객체 클래스 바인딩 예제</div>

        <v-btn @click="toggleActive">
            Active btn
        </v-btn>
        <v-btn @click="toggleError">
            Error btn
        </v-btn>
    </div>
</template>

<script setup>
    import { ref, reactive } from 'vue'
    const isActive = ref(true)
    const hasError = ref(false)

    const classObject = reactive({
        active: true,
        'text-danger': false
    })

    const toggleActive = () => {
        isActive.value = !isActive.value

        classObject.active = !classObject.active
    }

    const toggleError = () => {
        hasError.value = !hasError.value
        classObject['text-danger'] = !classObject['text-danger']
    }

    const hoverOn = () => {
        console.log('hoverOn')
        isActive.value = true
        classObject.active = true
    }

    const hoverOff = () => {
        console.log('hoverOff')
        isActive.value = false
        classObject.active = false
    }
</script>

<style scoped>
    .active {
        background-color: #ffa600;
    }

    .text-danger {
        color: #720c0c;
    }
</style>