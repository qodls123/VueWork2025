<template>
    <div>
        <slot :text="greetingMessage" :count="cnt"></slot>
        <v-btn @click="cnt++" icon="mdi-plus" class="ma-2"></v-btn>
        <v-text-field v-model="greetingMessage" class="ma-2"></v-text-field>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const greetingMessage = ref('Hellooooooo.')
    const cnt = ref(1)
</script>

<style lang="scss" scoped>

</style>