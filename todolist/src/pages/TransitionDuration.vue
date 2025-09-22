<template>
    <div>
        <Transition name="nested"
            @after-leave="onAfterLeave"
            @after-enter="onAfterEnter"
            :duration="3000">
            <div v-if="show" class="outer ma-2">
                Hello
                <div class="inner ma-2" :class="{'red': isRed}">
                    안녕
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const show = ref(true)
    const onAfterEnter = () => {
        alert('onAfterEnter')
        isRed.value = true
    }
    const onAfterLeave = () => {
        isRed.value = false
    }
    const isRed = ref(false)
</script>

<style   scoped>
    .red {background-color: red;}
</style>