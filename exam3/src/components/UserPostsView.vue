<template>
    <div>
        <AppHeader />
        <v-main>
            <v-row justify="center">
                <v-col cols="auto">
                    <div class="mt-1 text-h6 font-weight-bold text-center">User {{ $route.params.username }}</div>
                    <div class="text-subtitle-2 text-grey text-center">Miami, South Florida</div>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="auto">
                    <h2>{{ $route.params.username }}'s Posts</h2>
                </v-col>
            </v-row>
            <v-row v-for="index in 10"
                :key="index" justify="center">
                <v-col cols="auto">
                    User {{ $route.params.username }} with post {{ $route.params.postId }}
                </v-col>
            </v-row>
        </v-main>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>