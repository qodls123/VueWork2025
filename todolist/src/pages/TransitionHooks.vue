<template>
    <div>
        <v-container>
            <v-btn @click="show = !show">toggle</v-btn>
            <Transition
                class="ma-4"
                name="slide-fade"
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @after-enter="onAfterEnter"
                @enter-cancelled="onEnterCancelled"
                @before-leave="onBeforeLeave"
                @leave="onLeave"
                @after-leave="onAfterLeave"
                @leave-cancelled="onLeaveCancelled"         
            >
            <p v-if="show">안녕</p>
            </Transition>
        </v-container>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const show = ref(true)

    function onBeforeEnter(el) {console.log('before-enter')}

    function onEnter(el, done) {
        console.log('enter')
    }

    function onAfterEnter(el) {console.log('after-enter')}

    function onEnterCancelled(el) {console.log('enter-cancelled')}

    function onBeforeLeave(el) {console.log('before-leave')}

    function onLeave(el, done) {
        console.log('leave')
    }

    function onAfterLeave(el) {console.log('after-leave')}

    function onLeaveCancelled(el) {console.log('leave-cancelled')}
</script>

<style  scoped>
    .slide-fade-enter-active {
        transition: all 3s ease-out;
    }
    .slide-fade-leave-active {
        transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .slide-fade-enter-from , .slide-fade-leave-to {
        transform: translateX(40px);
        opacity: 0;
    }
</style>