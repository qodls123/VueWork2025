<template>
    <div>
    <v-container class="pa-10">
     <v-row>
       <v-col>
            <div class="text-h5 font-weight-bold">
                <VAvatar
                  color="grey"
                  size="36">
                  <v-img cover :src="picture"></v-img>
                </VAvatar>
                To Do List
            </div>
            <div class="ma-2">안녕하세요. {{ username }} 님!</div>
        </v-col>
        <v-spancer></v-spancer>
        <v-col text-right align-self="center">
             <v-btn
                variant="elevated" class="text-none mr-5"
                @click="refresh"
                >
                <v-icon>mdi-refresh</v-icon>
            </v-btn>
         <v-btn
         variant="elevated" color="red" class="text-none mr-5"
         to="/createtodo"
         >
         <span class="mr-2">
            <v-icon class="mr-2">mdi-plus</v-icon>Create New Card
         </span>
         </v-btn>
        </v-col>
     </v-row>
     <v-row justify-start class="mt-7">
        <ToDoCard v-for="item in cards" :item="item" :key="item.id"></ToDoCard>
     </v-row>
    </v-container>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import axios from 'axios';
    import ToDoCard from './ToDoCard.vue';

    const host = 'http://localhost:8000'
    const cards = ref([{}])
    const username = ref('unknown')
    const picture = ref('https://cdn.vuetifyjs.com/images/profiles/marcus.jpg')

    axios.get('http://localhost:8000/items/?format=json', 
        {
            headers: {
                'Access-Control-Allow-Headers': '*',
                
            },
            withCredentials: true
        }).then(function(response){
            cards.value = response.data.results
        })

    
    const loadUser = () => {
      axios.get(`${host}/auth/`, {
        withCredentials: true
      })
      .then(function(res) {
        console.log(res)
        let user = res.data
        username.value = user.username
        picture.value = user.picture
    })}

    onMounted(() => {
        loadUser()
    })
</script>

<style lang="scss" scoped>

</style>