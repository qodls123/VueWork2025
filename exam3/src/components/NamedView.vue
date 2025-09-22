<template>
    <div>
        <v-app>
            <router-view name="LeftSidebar"></router-view>
            <v-main>
                <router-view></router-view>
            </v-main>
            <router-view name="RightSidebar"></router-view>
        </v-app>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>