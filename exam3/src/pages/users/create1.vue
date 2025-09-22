<template>
    <div>
        <v-sheet class="mx-auto" width="300">
            <v-form class="ma-4">
                <v-text-field
                    v-model="name"
                    label="name"                
                >
                </v-text-field>

                <v-select
                    v-model="select"
                    label="Item"                
                >
                </v-select>

                <v-checkbox
                    label="Do you agree?"                
                >
                </v-checkbox>
                <v-btn
                    class="ma-4"
                    color="error"
                    block                
                >
                Reset Form
                </v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>