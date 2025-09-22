<template>
    <div>
        <v-card
            elevation="12"
            class="mt-4 mx-auto"
            v-show="data.isDump!=true"
            max-width="378">
            <v-img
                height="250"
                class="align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                cover :src="data.picture1">
                <v-card-title class="text-white">
                    @ {{ data.mealtime }}
                </v-card-title>
            </v-img>
            <v-row>
                <v-col>
                    <v-card-text>
                        <v-row class="mx-0 my-1">
                            {{ data.title }}
                            <v-icon
                                color="error"
                                icon="mdi-fire-circle"
                                class="ms-3"
                            ></v-icon>
                            <div class="text-orange ms-1">
                                {{ data.calories }}
                            </div>
                        </v-row>
                    {{ data.contents }}
                    </v-card-text>
                    <v-divider class="mx-4 mb-1"></v-divider>
                    <div class="px-4 mb-2">
                        <v-chip-group v-model="data.mealtime_type" selected-class="bg-deep-purple-lighteen-2">
                            <v-chip text="아침" value="breakfast"></v-chip>
                            <v-chip text="점심" value="lunch"></v-chip>
                            <v-chip text="저녁" value="dinner"></v-chip>
                            <v-chip text="기타" value="etc"></v-chip>
                        </v-chip-group>
                    </div>
                    <v-card-actions>
                        <v-btn
                            color="blue-darken-4 ma-1"
                            variant="text"
                            :to="`/snap/${data.id}`"> VIEW MORE </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn size="small" color="surface-variant"
                        variant="text" icon="mdi-heart"></v-btn>
                        <v-btn size="small" color="surface-variant"
                        variant="text" icon="mdi-bookmark"></v-btn>
                        <v-btn size="small" color="surface-variant"
                        variant="text" icon="mdi-share-variant"></v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const props = defineProps(['data'])
    const {data} = props
</script>

<style lang="scss" scoped>

</style>