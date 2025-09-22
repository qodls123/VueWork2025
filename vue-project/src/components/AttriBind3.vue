<template>
    <div>
        <p>이미지 URL {{ imagePath }}</p>
        <br>
        <a :href="targetUrl" target="_blank">
            <img :src="imagePath"/>
        </a>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const imagePath = 'https://sponsors.vuejs.org/images/chrome_frameworks_fund.png';
    const targetUrl = 'https://www.google.com';
</script>

<style scoped>

</style>