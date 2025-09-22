<template>
    <div>
        <h1>MAIN VIEW!</h1>
        <p>
            <strong>Current route path:</strong>
            {{ $route.fullPath }}
        </p>
        <nav>
            <router-link class="v-btn" to="/">
                Go To Main
            </router-link>
            <router-link class="v-btn" to="/about">
                Go To About
            </router-link>
            <a href="/about" class="v-btn">Href About</a>
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .v-btn {
        text-decoration: none;
        margin: 4px;
        color: teal;
    }
</style>