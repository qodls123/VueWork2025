<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    Title Model: {{ textTitle }}
                    <hr></hr>
                    Subtitle Model: {{ textSubTitle }}<hr></hr>
                    SubSubtitle Model: {{ textSubSubTitle }}
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <div class="mt-6">Named v-model</div>
                    <hr></hr>
                    <ChildCompParam
                        v-model:title="textTitle"
                        v-model:subtitle="textSubTitle"
                        v-model:subsubtitle="textSubSubTitle"
                        class="my-3"
                    >
                    </ChildCompParam>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import ChildCompParam from '@/components/ChildCompParam.vue';
    const textTitle = ref('titleParent')
    const textSubTitle = ref('subtitleparent')
    const textSubSubTitle = ref('subsubtitleparent')
</script>

<style scoped>

</style>