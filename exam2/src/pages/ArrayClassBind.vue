<template>
    <div>
        <div class="stativ ma-2"
            :class="[activeClass, errorClass]"
        >배열 클래스 바인딩 예제</div>

        <v-btn @click="toggleActive">
            Active btn
        </v-btn>
        <v-btn @click="toggleError">
            Error btn
        </v-btn>
    </div>

</template>

<script setup>
    import { ref, reactive } from 'vue'
    const activeClass = ref('active')
    const errorClass = ref('text-danger')

    const toggleActive = () => {
        if(activeClass.value.length > 0) {
            activeClass.value = ''
        }
        else {
            activeClass.value = 'active'
        }
    }

    const toggleError = () => {
        if(errorClass.value.length > 0) {
            errorClass.value = ''
        }
        else {
            errorClass.value = 'text-danger'
        }
    }
</script>

<style scoped>
    .active {
        background-color: #ffa600;
        padding-left: 20px;
    }

    .text-danger {
        color: #720c0c;
    }
</style>