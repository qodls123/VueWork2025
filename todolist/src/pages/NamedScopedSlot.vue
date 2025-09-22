<template>
    <div>
        <fancy-list api-url="url" :per-page="10">
            <template #item="{body, username, likes}">
                <div class="item">
                    <p class="meta"> {{ likes }} likes | by {{ username }}</p>
                    <p>{{ body }}</p>
                </div>
            </template>
            <template #more="{load:loadMore}">
                <v-btn @click="loadMore">More...</v-btn>
            </template>
        </fancy-list>
    </div>
</template>

<script setup>
    import FancyList from '@/components/FancyList.vue';
</script>

<style scoped>
    .meta {
        font-size: 12px;
        color: #42b883;
    }
</style>