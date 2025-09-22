<template>
    <div>
        <input type="checkbox" id="checkbox" v-model="checked"/>
        <label for="checkbox">{{ checked }}</label>
        <p>선택된 객체 {{ checked }}</p>

        <v-divider></v-divider>

        <div>체크된 이름: {{ checkedNames }}</div>

        <input type="checkbox" id="jeck" value="잭" v-model="checkedNames"/>
        <label for="jeck">잭</label>

        <input type="checkbox" id="john" value="존" v-model="checkedNames"/>
        <label for="john">존</label>

        <input type="checkbox" id="mike" value="마이크" v-model="checkedNames"/>
        <label for="mike">마이크</label>

        <input type="checkbox" id="poly" value="폴리텍" v-model="checkedNames"/>
        <label for="poly">폴리텍</label>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const checked = ref(true)

    const checkedNames = ref([])
</script>

<style lang="scss" scoped>

</style>