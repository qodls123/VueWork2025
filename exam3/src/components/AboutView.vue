<template>
    <div>
        <h1>ABOUT VIEW!</h1>
        <p>
            <strong>Current route path:</strong>{{ $route.fullPath }}
        </p>
        <nav>
            <router-link class="v-btn" to="/about">Go to About</router-link>
            <router-link class="v-btn" to="/">Go to Home</router-link>
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