<template>
    <div>
        <div class="ma-4">
            <div>
                USER {{ $route.params.id }} INDEX.vue
            </div>
            <div>
                useRoute() -> {{ id }}
            </div>
            <v-btn :to="`/users/${next}`">>>{{ next }}</v-btn>
        </div>
    </div>
</template>

<script setup>
    import {ref, watch} from 'vue'
    import {useRoute} from 'vue-router';
    const route = useRoute()
    const id = ref(route.params.id)
    const next = ref(parseInt(id.value)+1)

    watch(()=> route.params.id,
        (newId) => {
            id.value = newId
            next.value = parseInt(newId) + 1
        }
    )
</script>

<style lang="scss" scoped>

</style>