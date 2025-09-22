<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    블로그제목
                </v-col>
                <v-col>
                    {{ title }}
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
    defineProps(['title'])
</script>

<style lang="scss" scoped>

</style>