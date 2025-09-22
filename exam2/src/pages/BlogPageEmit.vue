<template>
    <div>
        <div :style="{fontSize: postFontSize + 'em'}">
            <BlogPostEmit 
                v-for="post in posts"
                :key="post.id"
                :title="post.title"
                @enlarge-text="postFontSize += 0.1"
            />
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import BlogPostEmit from '@/components/BlogPostEmit.vue';

    const postFontSize = ref(1)
    const posts = ref([
        {id:1, title: 'Vue와 함꼐한 나의 여행'},
        {id:2, title: 'Vue로 블로깅 하기'},
        {id:3, title: 'Vue가 재미있는 이유'}
    ])
</script>

<style lang="scss" scoped>

</style>