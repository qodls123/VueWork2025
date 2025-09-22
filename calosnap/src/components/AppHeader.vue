<template>
    <div>
    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <v-icon size="large" icon="mdi-fire-circle" class="mx-2" color="#e30c69"></v-icon>
        </template>
        <v-app-bar-title class="ms-1">Calories Snap</v-app-bar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
    </div>
</template>

<script setup>
    import axios from 'axios'
    import {useRouter} from 'vue-router'
    import {ref} from 'vue'
    const snackbar = ref(false)
    const snackbarText = ref('')
    const router = useRouter()
    const host = '/api'
</script>

<style lang="scss" scoped>

</style>