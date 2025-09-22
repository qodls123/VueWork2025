<template>
    <div>
        <v-app>
            <v-app-bar class="pa-2">
                <v-btn href="#/">Home</v-btn>
                <v-btn href="#/posts">Posts</v-btn>
                <v-btn href="#/about">About</v-btn>
                <v-btn href="#/non-existent-path">잘못된 링크</v-btn>
            </v-app-bar>
            <v-main class="ma-5">
                <component :is="currentView" />
            </v-main>
        </v-app>
    </div>
</template>

<script setup>
    import { ref, computed} from 'vue'
    import Home from '@/components/Home.vue'
    import About from '@/components/About.vue'
    import Posts from '@/components/Posts.vue'
    import NotFounds from '@/components/NotFounds.vue'

    const routes = {
        '/': Home,
        '/about': About,
        '/posts': Posts,
        '/post1': Posts
    }
    const currentPath = ref(window.location.hash)
    window.addEventListener('hashchange', () => {
        currentPath.value = window.location.hash
    })

    const currentView = computed(() => {
        let item = currentPath.value.slice(1)
        console.log('item', item)
        return routes[currentPath.value.slice(1) || '/'] || NotFounds
    })
</script>

<style  scoped>

</style>