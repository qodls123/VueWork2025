<template>
    <div>
        <v-container>
            <ScopedSlotComponent v-slot="slotProps">
                <div class="ma-2">
                    {{  slotProps.text }}
                </div>
                <hr></hr>
                <div class="ma-2">
                    {{  slotProps.count }}
                </div>
            </ScopedSlotComponent>
        </v-container>
    </div>
</template>

<script setup>
import ScopedSlotComponent from '@/components/ScopedSlotComponent.vue';
</script>

<style lang="scss" scoped>

</style>