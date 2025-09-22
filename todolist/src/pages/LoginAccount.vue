<template>
    <div>
        <v-layout class="auth-wrapper d-flex align-center justify-center auth-bg">
            <v-card
                class="auth-card pa-4 pt-7"
                max-width="448">
                <v-card-item class="justify-center">
                    <v-card-title class="font-weight-semibold text-2xl text-uppercase">
                        To Do List
                    </v-card-title>
                </v-card-item>
                <v-card-text class="pt-2">
                    <p class="mb-0">
                        로그인하세요.
                    </p>
                </v-card-text>
                <v-card-text>
                    <v-form @submit.prevent="() => {}">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="form.username" label="Username"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.password"
                                    label="Password"
                                    :type="isPasswordVisible ? 'text' : 'password'"
                                    :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                                ></v-text-field>
                                <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                                    <v-checkbox
                                        v-model="form.remember"
                                        label="Remember me"
                                    ></v-checkbox>
                                </div>
                                <v-btn block @click="submit" text="Login"></v-btn>
                            </v-col>
                            <v-col
                                cols="12"
                                class="text-center text-base">
                                <span>New on our platform?</span>
                                <router-link
                                    class="text-primary ms-2"
                                    to="/signup"
                                >계정 생성</router-link>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
            </v-card>
            <v-snackbar
                v-model="snackbar">
                {{ snackbarText }}
                <template v-slot:actions>
                <v-btn
                    color="pink" variant="text"
                    @click="snackbar = false"
                > Close </v-btn>
                </template>
            </v-snackbar>
        </v-layout>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import {ref} from 'vue'
    import {useRouter} from 'vue-router'
    import { useUserStore } from '@/stores/user';

    const snackbar = ref(false)
    const snackbarText = ref('')
    const router = useRouter()

    const form = ref({
        username:'',
        password:'',
        remember:false,
    })
    const isPasswordVisible = ref(false)

    const api = 'http://localhost:8000/login/'

    const submit = () => {
        axios.post(api, {
            username: form.value.username,
            password: form.value.password
        }, {
            withCredentials: true
        }).then((res) => {
            if(form.value.remember) {
                console.log('set userInfo')
                window.localStorage.setItem('userLogin', btoa(JSON.stringify(form.value)))
            }
            else {
                window.localStorage.removeItem('userLogin')
            }
            const userStore = useUserStore()
            userStore.login(res.data.sessionid)
            window.sessionStorage.setItem('userInfo', btoa(JSON.stringify(res.data.data)))
            axios.defaults.headers.common['X-CSRFToken'] = res.data.csrftoken
            snackbarText.value = '로그인 성공'
            snackbar.value = true
            router.push({path: '/profileaccount'})
        }).catch(() => {
            snackbarText.value = '로그인 정보를 바르게 입력하세요'
            snackbar.value = true
        })
    }
    let strUserLogin = window.localStorage.getItem('userLogin')
    if(strUserLogin) {
        const userLogin = JSON.parse(window.atob(strUserLogin))
        console.log('userLogin', userLogin)
        form.value = userLogin
    }

    
</script>

<style scoped>
    @import '@/assets/main.css';
</style>