<template>
    <div>
        <v-container>
            <v-number-input
                control-variant="default" label="number1"></v-number-input>
            <v-number-input
                control-variant="stacked" label="number2"></v-number-input>
            <v-number-input
                :reverse="false"
                control-variant="split" label="number3"></v-number-input>
            <v-number-input
                reverse
                control-variant="default" label="number4"></v-number-input>
        </v-container>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>