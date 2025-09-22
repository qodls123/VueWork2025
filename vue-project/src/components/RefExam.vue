<template>
    <div>
        <button @click="increment">
            {{ count }}
        </button>
        {{ count1 }}
    </div>
</template>

<script>
    import {ref} from 'vue';
    export default {
        setup () {
            const count = ref(0)
            const increment = () => {
                count.value++
            }
            return {
                count: count, // -> count(동일하면 하나만 적어도 됨)
                count1:count,
                increment
            }
        }
    }
</script>

<style scoped>

</style>