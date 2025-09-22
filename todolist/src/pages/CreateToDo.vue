<template>
    <div>
        <v-container>
            <v-sheet width="400" class="mx-auto">
                <v-col>
                    <div class="text-h5 font-weight-bold">To Do</div>
                </v-col>
                <v-form>
                    <v-text-field
                        v-model="title"
                        prepend-icon="mdi-format-title"
                        label="title"
                    ></v-text-field>
                    <v-textarea
                        v-model="content"
                        label="content"
                        prepend-icon="mdi-content-paste"
                        clearable
                    ></v-textarea>
                    <v-text-field
                        v-model="description"
                        prepend-icon="mdi-subtitles"
                        label="description"
                    ></v-text-field>
                    <n-date-input
                        v-model="dueDate"
                        prepend-icon="mdi-clipboard-text-clock"
                        label="due date"
                    ></n-date-input>
                    <v-row>
                    <v-spancer></v-spancer>
                    <v-btn
                        variant="elevated"
                        color="blue"
                        class="text-none ma-2"
                        @click="submitForm"
                        prepend-icon="mdi-plus"
                    >저장</v-btn>
                    <v-btn
                        variant="elevated"
                        class="text-none ma-2"
                        to="/"
                        prepend-icon="mdi-close"
                    >닫기</v-btn>
                    </v-row>
                </v-form>
            </v-sheet>
        </v-container>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import axios from 'axios';
    import NDateInput from '@/components/NDateInput.vue';

    const title = ref('')
    const content = ref('')
    const description = ref('')
    const dueDate = ref(new Date())

    const submitForm = () => {
        axios.post('http://127.0.0.1:8000/items/', {
            title: title.value,
            content: content.value,
            description: description.value,
            dueDate: dueDate.value
        }).then((res) => {
            alert('등록됨')
        }).catch((error) => {
            alert(error)
        })
    }
</script>

<style lang="scss" scoped>

</style>