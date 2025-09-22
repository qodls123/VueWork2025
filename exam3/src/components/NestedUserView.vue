<template>
    <div>
        <AppHeader />
        <v-main>
            <v-row justify="center">
                <v-col cols="auto">
                    <div class="mt-1 text-h6 font-weight-bold text-center">
                        User {{ $route.params.id }}
                    </div>
                    <div class="text-subtitle-2 text-grey text-center">
                        Miami, South Florida
                    </div>
                </v-col>
            </v-row>

            <router-view></router-view>
        </v-main>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>