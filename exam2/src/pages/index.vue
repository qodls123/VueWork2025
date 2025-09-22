<template>
  <div class="cc">
    <ComputedProp />
    <CachedPropFunc />
    <WriteableComputed />
    <VueList />
    <LifeCycleHookComp/>
  </div>
</template>

<script setup>
  //
</script>
<style>
  .cc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>