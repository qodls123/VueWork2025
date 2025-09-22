<template>
    <div class="auth-wrapper d-flex align-center justify-center pa-4 auth-bg">
        <v-card
            class="auth-card pa-4 pt-7"
            max-width="448">
            <v-card-item class="justify-center">
                <v-card-title class="font-weight-semibold text-2xl text-uppercase">
                    User Profile
                </v-card-title>
            </v-card-item>

            <v-card-text class="pt-2">
                <h5 class="text-h5 font-weight-semibold mb-1">
                    Hello! {{ username }}
                </h5>
                <p class="mb-0">
                    반갑습니다.
                </p>
            </v-card-text>

            <v-card-text>
                <v-form @submit.prevent>
                    <v-row>
                        <v-col cols="12"
                            class="text-center">
                            <v-avatar
                                color="grey"
                                size="300"
                            ><v-img cover :src="src">사진표시</v-img>
                            </v-avatar>
                        </v-col>
                        <v-col
                            cols="12"
                            class="text-center text-base"
                        ><span>소속 폴리텍 6대학{{ username }}</span>
                        </v-col>
                        <v-col
                            cols="6"
                            class="text-center"
                            
                        ><v-btn to="/">ToDoList</v-btn>
                        </v-col>
                        <v-col
                            cols="6"
                            class="text-center"
                        ><v-btn @click="logout">Logout</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>

        <v-snackbar
            v-model="snackbar">
            {{  snackbarText }}
            <template v-slot:actions>
                <v-btn
                    color="pink"
                    variant="text"
                    @click="snackbar = false"
                >Close</v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useUserStore } from '../stores/user';

    const snackbar = ref(false)
    const snackbarText = ref('')
    const router = useRouter()
    const username = ref('Unknown')
    const src = ref('https://cdn.vuetifyjs.com/images/profiles/marcus.jpg')

    const host = 'http://localhost:8000'
    const logout = () => {
        axios.post(`${host}/logout/`,{}, {
            withCredentials: true
        }).then(() => {
            snackbarText.value = "로그아웃 되었습니다."
            snackbar.value = true
            router.push({path: '/login'})
            const userStore = useUserStore()
            userStore.logout()
        })
    }
    const refresh = () => {
        axios.get(`${host}/auth/`, {
            withCredentials: true
        }).then(function(res)  {
            console.log('user', res)
            let user = res.data
            username.value = user.username
            src.value = user.picture
        })
    }

    onMounted(() => {
        refresh()
    })
</script>

<style lang="scss" scoped>

</style>