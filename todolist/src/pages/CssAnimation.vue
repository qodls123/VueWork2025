<template>
    <div>
        <v-container>
            <v-btn @click="show = !show">toggle</v-btn>
            <Transition name="bounce">
                <p v-if="show" style="text-align: center;">hello! here are bouncible text!!</p>
            </Transition>
        </v-container>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const show = ref(true)
</script>

<style  scoped>
    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }
    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
            background-color: aqua;
            border-radius: 50px;
        }
        100% {
            transform: scale(1);
        }
    }
</style>