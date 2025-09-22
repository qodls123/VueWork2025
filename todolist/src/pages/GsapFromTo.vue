<template>
    <div class="container">
        <div class="box gradient-green green"></div>
        <div class="box gradient-purple purple"></div>
        <div class="box gradient-blue blue"></div>
    </div>
</template>

<script setup>
    import gsap from 'gsap';
    import { onMounted } from 'vue';

    onMounted(() => {
        gsap.to(".green", {rotation:360, x:150, duration:1});
        gsap.from(".purple", {rotation:-360, x:-200, duration:1});
        gsap.fromTo(".blue", {x: -100},{rotation:360, x:200, duration:1});
    })
</script>

<style  scoped>
    @import '@/assets/main.css';
</style>