<template>
    <div>
        <v-container>
            <v-btn @click="show = !show">toggle</v-btn>
            <Transition
                class="ma-4"
                name="custom-classes"
                enter-active-class="animate__animated animate__fadeInDown"
                leave-active-class="animate__animated animate__flash"
            >
            <p v-if="show">hello</p>
            </Transition>
        </v-container>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const show = ref(true)
</script>

<style >
    @import '@/assets/animate.min.css';
</style>