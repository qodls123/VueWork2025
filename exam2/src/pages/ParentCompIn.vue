<template>
    <div>
        <v-container>
            Parent Model: {{ textModel }}
            <hr></hr>
            <div class="mt-6">Type #1</div>
            <hr></hr>
            <ChildCompIn v-model="textModel" class="my-3"></ChildCompIn>

            <div>Type #2</div>
            <hr></hr>
            <ChildCompIn
                :model-value="textModel"
                @update:model-value="$event => (textModel = $event)"
                class="my-3"
            ></ChildCompIn>
        </v-container>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import ChildCompIn from '@/components/ChildCompIn.vue';
    const textModel = ref('init')
</script>

<style scoped>

</style>