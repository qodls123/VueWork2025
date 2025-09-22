<template>
    <div>
        <v-row justify="center">
            <v-col cols="auto">
                <div class="mt-1 text-h6 font-weight-bold text-center">
                    NestedUserPost Component
                </div>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row justify="center">
            <v-col cols="auto">
                <h2>{{ $route.params.id }} 's Profile</h2>
            </v-col>
        </v-row>
        <v-row v-for="index in 5"
            :key="index"
            justify="center">
            <v-col cols="auto">
                User {{ $route.params.id }}'s Post {{ index }}
            </v-col>
        </v-row>
    </div>
</template>

<script setup>

</script>

<style  scoped>

</style>