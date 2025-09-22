<template>
    <div>
        <v-container>
            <v-btn @click="show = !show">toggle</v-btn>
            <Transition class="ma-3">
                <p v-if="show">hello</p>
            </Transition>
        </v-container>
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    const show = ref(true)
</script>

<style  scoped>
    .v-enter-active, .v-leave-active {
        transition:opacity 0.5s ease;
    }
    .v-enter-from, .v-leave-to {
        opacity: 0;
    }
</style>