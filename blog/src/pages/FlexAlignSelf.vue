<template>
    <div class="meal-css-tester-container ma-4 d-flex align-center" :style="{height:'15rem'}">
        <div class="meal-css-tester-item" :style="{alignSelf: alignSelf1}">AAA</div>
        <div class="meal-css-tester-item" :style="{alignSelf: alignSelf2}">bbbb</div>
        <div class="meal-css-tester-item" :style="{alignSelf: alignSelf3}">ccccc</div>
    </div>

    <div class="ma-4">1. alignSelf:{{ alignSelf1 }}</div>
    <v-btn-toggle
        variant="outlined"
        divided
        class="ma-4"
        v-model="alignSelf1"
    >
    <template v-for="option in options">
    <v-btn :text="option" :value="option"></v-btn>
    </template>
    </v-btn-toggle>

    <div class="ma-4">2. alignSelf:{{ alignSelf2 }}</div>
    <v-btn-toggle
        variant="outlined"
        divided
        class="ma-4"
        v-model="alignSelf2"
    >
    <template v-for="option in options">
    <v-btn :text="option" :value="option"></v-btn>
    </template>
    </v-btn-toggle>

    <div class="ma-4">3. alignSelf:{{ alignSelf3 }}</div>
    <v-btn-toggle
        variant="outlined"
        divided
        class="ma-4"
        v-model="alignSelf3"
    >
    <template v-for="option in options">
    <v-btn :text="option" :value="option"></v-btn>
    </template>
    </v-btn-toggle>
</template>

<script setup>
    import { ref } from 'vue';
    const alignSelf1 = ref("0")
    const alignSelf2 = ref("0")
    const alignSelf3 = ref("0")
    const options = ref([
        "auto",
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "baseline"
    ])
</script>

<style lang="scss" scoped>
    @import '@/assets/custom.css';
</style>