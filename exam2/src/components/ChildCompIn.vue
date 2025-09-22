<template>
    <div>
        <v-container class="border-md border-info">
            <v-row>
                <div class="ma-2">
                    부모 바인딩 v-model은 : {{ modelValue }}
                </div>
            </v-row>
            <v-row>
                <input 
                    :value="props.modelValue"
                    @input="$emit('update:modelValue',
                        $event.target.value)"
                    class="ma-2 border-thin pa-2"    
                >
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
    const props = defineProps(['modelValue'])
    const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>