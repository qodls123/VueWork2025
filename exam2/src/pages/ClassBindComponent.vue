<template>
    <div>
        <div>MyComponent</div>
        <MyComponent class="baz boo ma-2"></MyComponent>
        <hr></hr>
        <div>MyComponent</div>
        <MyMultiComponent class="baz ma-2"></MyMultiComponent>
    </div>
</template>

<script setup>
    import MyComponent from '@/components/MyComponent.vue';
    import MyMultiComponent from '@/components/MyMultiComponent.vue';
</script>

<style lang="scss" scoped>

</style>