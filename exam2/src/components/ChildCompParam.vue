<template>
    <div>
        <v-container class="border-md border-info">
            <v-row>
                <v-col>
                    <div>title:{{ titleM }}</div>
                    <div>subtitle: {{ subtitleM }}</div>
                    <div>subsubtitle: {{ subsubtitleM }}</div>
                    <div class="my-2">
                        <span class="mr-2">Title:</span>
                        <input class="border-md w-75" v-model="titleM">
                    </div>
                    <div class="my-2">
                        <span class="mr-2">SubTitle:</span>
                        <input class="border-md" v-model="subtitleM">
                    </div>
                    <div class="my-2">
                        <span class="mr-2">SubSubTitle:</span>
                        <input class="border-md" v-model="subsubtitleM">
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
    const titleM = defineModel('title')
    const subtitleM = defineModel('subtitle')
    const subsubtitleM = defineModel('subsubtitle')
</script>

<style scoped>

</style>