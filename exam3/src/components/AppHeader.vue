<template>
    <div>
        <v-app-bar class="pa-2">
            <router-link to="/">
                <v-btn>Home</v-btn>
            </router-link>
            <v-btn to="/users/jolyne">users/jolyne</v-btn>
            <v-btn to="/users/jolyne/posts/123">users/jolyne/posts/123</v-btn>

            <v-btn to="/user/johnny">johnny</v-btn>
            <v-btn to="/user/johnny/profile">johnny/profile</v-btn>
            <v-btn to="/user/johnny/posts">johnny/posts</v-btn>
        </v-app-bar>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>