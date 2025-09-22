<template>
    <div>
        <v-container>
            Parent Model: {{ textModel }}
            <hr>
            <ChildComp v-model="textModel" class="my-3"></ChildComp>
        </v-container>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import ChildComp from '@/components/ChildComp.vue';
    const textModel = ref('init')
</script>

<style lang="scss" scoped>

</style>