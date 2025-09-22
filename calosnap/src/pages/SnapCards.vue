<template>
    <div>
        <AppHeader>
            <template #actions>
                <div>
                    <v-btn density="comfortable" icon="mdi-refresh" @click="refresh">
                    </v-btn>
                    <v-btn variant="elevated" color="red" class="mx-5" text="New Snap" to="/createsnap">
                        <span class="mr-2">
                            <v-icon class="mr-2">mdi-plus</v-icon>
                            Snap
                        </span>
                    </v-btn>
                </div>
            </template>
        </AppHeader>
        <v-container>
            <v-row justify-start>
                <v-col>
                    <CaloCard :data=item v-for="item in cards" :key="item.id"></CaloCard>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
    import CaloCard from '@/components/CaloCard.vue';
    import AppHeader from '@/components/AppHeader.vue';
    import axios from 'axios'
    import { onMounted, ref } from 'vue';

    //proxy
    const restapi = '/api/dietlogs/'
    const cards = ref([])
    const refresh = () => {
        axios.get(`${restapi}?format=json&limit=100`,{}, {
            headers: {
                'Access-Control-Allow-Headers': '*',
            }
        }).then(function(response) {
            cards.value = response.data.results
        })
    }
    onMounted(() => {
        refresh()
    })
</script>

<style scoped>
    .logo {
        color: rgb(227, 12, 105);
        width: 40px;
    }
</style>