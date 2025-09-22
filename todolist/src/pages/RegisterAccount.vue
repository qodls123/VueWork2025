<template>
    <div class="auth-wrapper d-flex align-center justify-center pa-4 auth-bg">
        <v-card
            class="auth-card pa-4 pt-7"
            max-width="448">
            <v-card-item class="justify-center">
                <v-card-title class="font-weight-semibold text-2xl text-uppercase">
                    To Do List
                </v-card-title>
            </v-card-item>

            <v-card-text class="pt-2">
                <h5 class="text-h5 font-weight-semibold mb-1">
                    계정 생성
                </h5>
                <p class="mb-0">
                    계정 정보를 입력해주세요.
                </p>
            </v-card-text>

            <v-card-text>
                <v-form @submit.prevent="submit">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="form.username"
                                label="Username"
                            ></v-text-field>
                        </v-col>
                        <!-- password -->
                        <v-col cols="12">
                            <v-text-field
                                v-model="form.password1"
                                label="Password"
                                :type="isPassword1Visible ? 'text' : 'password'"
                                :append-inner-icon="isPassword1Visible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                                @click:append-inner="isPassword1Visible = !isPassword1Visible"
                            ></v-text-field>
                            <!-- password2 -->
                            <v-text-field
                                v-model="form.password2"
                                label="Confirm Password"
                                class="mt-2"
                                :type="isPassword1Visible ? 'text' : 'password'"
                                :append-inner-icon="isPassword2Visible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                                @click:append-inner="isPassword2Visible = !isPassword2Visible"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-file-input
                                v-model="files"
                                prepend-icon=""
                                append-inner-icon="mdi-image-search"
                                label="Profile Picture"
                            ></v-file-input>
                        </v-col>
                        <v-col cols="12">
                            <v-btn block type="submit" text="Sign Up"></v-btn>
                        </v-col>
                        <!-- login instead -->
                         <v-col cols="12" class="text-center text-base">
                            <span>Already have an account?</span>
                            <router-link
                                class="text-primary ms-2"
                                to="login"
                            >로그인</router-link>
                         </v-col>
                         <v-col cols="12" class="d-flex align-center">
                            <v-divider></v-divider>
                            <span class="mx-4">or</span>
                            <v-divider></v-divider>
                         </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
    <v-snackbar
        v-model="snackbar">
        {{ snackbarText }}
        <template v-slot:actions>
            <v-btn
                color="pink"
                variant="text"
                @click="snackbar = false"
            >Close</v-btn>
        </template>
    </v-snackbar>
</template>

<script setup>
    import { ref} from 'vue'
    import axios from 'axios';

    const form = ref({
        username:'',
        password1: '',
        password2: '',
    })
    const files = ref([])

    const isPassword1Visible = ref(false)
    const isPassword2Visible = ref(false)
    const snackbar = ref(false)
    const snackbarText = ref('')
    const isEmpty = value => {
        if (value === null || value === undefined || value === '')
            return true
        return !!(Array.isArray(value) && value.length === 0)
    }
    const host = 'http://localhost:8000'
    const api = '/authuser/'
    const submit = () => {
        if(isEmpty(form.value.username)) {
            snackbarText.value = '유저명을 입력해주세요'
            snackbar.value = true
        }
        else if(isEmpty(form.value.password1)) {
            snackbarText.value = '비밀번호를 입력해라'
            snackbar.value = true
        } else if (form.value.password1 != form.value.password2) {
            snackbarText.value = '비밀번호와 확인이 다르다.'
            snackbar.value = true
        } else {
            axios.post(`${host}${api}`, {...form.value, picture: files.value} , {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(()=> {
                snackbarText.value = '계정이 생성되었다'
                snackbar.value = true
            }).catch((error) => {
                alert(error)
            })
        }
    }
</script>

<style scoped>
@import '@/assets/main.css';
</style>