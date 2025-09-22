<template>
    <div>
        <v-container>
            <div>{{ text1 }}</div>
            <v-text-field label="Label" prepend-icon="$vuetify" v-model="text1"></v-text-field>
            <div>{{ text2 }}</div>
            <v-text-field label="Label" prepend-inner-icon="$mdi-magnify" cleable v-model="text2"></v-text-field>
            <div>{{ text3 }}</div>
            <v-text-field label="Label" append-icon="$mdi-menu" variant="underlined" v-model="text3"></v-text-field>
        </v-container>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const text1 = ref('text1')
    const text2 = ref('text2')
    const text3 = ref('text3')
</script>

<style lang="scss" scoped>

</style>