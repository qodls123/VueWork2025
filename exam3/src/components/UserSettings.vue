<template>
    <div>
        <div class="us">
            <h2>User Settings</h2>
            <v-row>
                <v-col cols="1" class="ma-4 border-md">
                    <UserSettingsNav />
                </v-col>
                <v-col class="ma-2">
                    <router-view></router-view>
                    <router-view name="helper"></router-view>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script setup>
import UserSettingsNav from './UserSettingsNav.vue';
</script>

<style lang="scss" scoped>

</style>