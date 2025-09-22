<template>
    <div>
        <v-container>
            <v-btn @click="show = !show">toggle: slide + fade</v-btn>
            <Transition name="a" class="ma-4">
                <p v-if="show">hello</p>
            </Transition>
        </v-container>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const show = ref(true)
</script>

<style  scoped>
    .a-enter-active {
        transition: all 0.1s ease-out;
    }
    .a-leave-active {
        transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .a-enter-from,
    .a-leave-to {
        transform: translateX(100px);
        opacity: 1;
    }
</style>