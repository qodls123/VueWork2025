<template>
    <div>
        <v-card v-for="item in items" :key="item.id" class="ma-4">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
        </v-card>
    </div>
</template>

<script setup>
    import {ref, reactive} from 'vue'

    let itemList = [...Array(8).keys()].map(i => {
        return {
            title: `title${i+1}`,
            subtitle: `subtitle${i+1}`
        }
    })

    const items = reactive(itemList)
</script>

<style lang="scss" scoped>

</style>