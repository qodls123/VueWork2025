<template>
    <div class="meal-css-tester-container ma-4 d-flex" :style="{alignContent,flexWrap:'wrap', height:'15rem'}">
        <div class="meal-css-tester-item" >AAA</div>
        <div class="meal-css-tester-item" >bbbb</div>
        <div class="meal-css-tester-item" >ccccc</div>
        <div class="meal-css-tester-item" >ddd</div>
        <div class="meal-css-tester-item" >eeee</div>
        <div v-if="alignItems == 'baseline'" class="baseline"></div>
    </div>
    <div class="ma-4">alignContent:{{ alignContent }}</div>
    <v-btn-toggle
        variant="outlined"
        divided
        class="ma-4"
        :style="{flexWrap:'wrap', height:'100px'}"
        v-model="alignContent"
    >
    <template v-for="option in options">
    <v-btn :text="option" :value="option"></v-btn>
    </template>
    </v-btn-toggle>
</template>

<script setup>
    import { ref } from 'vue';
    const alignContent = ref("stretch")
    const options = ref([
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly"
    ])
</script>

<style lang="scss" scoped>
    @import '@/assets/custom.css';
</style>