<template>
    <div>
        {{ msg }}
    </div><br></br>
    <p>텍스트 보간법 사용: {{ rawHtml }}</p><br></br>
    <p>v-html 디렉티브 사용: <span v-html= "rawHtml"></span></p>
</template>

<script setup>
    import {ref} from 'vue';
    const msg = ref('Hellooooooooo');
    const rawHtml = '<span style = "color:red">이것은 빨간색</span>';
</script>

<style scoped>

</style>