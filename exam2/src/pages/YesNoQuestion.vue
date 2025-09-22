<template>
    <div>
        <v-container>
            <v-col>
                <p>
                    예/아니오 질문:
                    <input v-model="question">
                </p>
                <p>응답: {{ answer }}</p>
                <img :src="src">
            </v-col>
        </v-container>
    </div>
</template>

<script setup>
    import {ref, watch} from 'vue'

    const question = ref('')
    const answer = ref('질문에는 일반적으로 물음표가 포함됩니다.')
    const src = ref('')

    watch(question, async (newQuestion, oldQuestion)=> {
        if (newQuestion.indexOf('?') > -1) {
            answer.value = '생각 중..'
            try {
                const res = await fetch('https://yesno.wtf/api')
                await res.json().then(content => {
                    if(content.answer === 'yes') {
                        answer.value = '네'
                    }
                    else {
                        answer.value = '아니오'
                    }
                    src.value = content.image
                })
            }   catch (error) {
                answer.value = '에러! api연결 안됨' + error
            }
        }
    })
</script>

<style scoped>
    input {
        border-style: solid;
        width: 400px;
    }
</style>