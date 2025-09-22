<template>
    <div>
        <AppHeader />
        <v-main>
            <v-row class="mt-10" justify="center">
                <v-col cols="auto">
                    <v-avatar class="outlined" size="100">
                        <v-avatar size="90">
                            <v-img
                                lazy-src="../assets/leo_messi.jpg"
                                src="../assets/leo_messi.jpg"
                            >
                            </v-img>
                        </v-avatar>
                    </v-avatar>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="auto">
                    <div class="mt-1 text-h6 font-weight-bold text-center">User {{ $route.params.username }}</div>
                    <div class="text-subtitle-2 text-grey text-center">Miami, South Florida</div>
                </v-col>
            </v-row>
        </v-main>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>