<script setup>

import AttrBind1 from './components/AttrBind1.vue';
import TextInterpolation from './components/TextInterpolation.vue';
import ButtonCounter from './components/ButtonCounter.vue';
import AttrBind2 from './components/AttrBind2.vue';
import AttriBind3 from './components/AttriBind3.vue';
import DynaAttr1 from './components/DynaAttr1.vue';
import Dynattr2 from './components/Dynattr2.vue';
import JSExpr from './components/JSExpr.vue';
import EventHandler from './components/EventHandler.vue';
import CondRender from './components/CondRender.vue';
import CondRender2 from './components/CondRender2.vue';
import RefExam from './components/RefExam.vue';
import DeepReactivity from './components/DeepReactivity.vue';
import ReactiveFn from './components/ReactiveFn.vue';
import ReactiveDiff from './components/ReactiveDiff.vue';
import ReactiveDiff2 from './components/ReactiveDiff2.vue';
</script>

<template>
    <TextInterpolation /><br />
    <AttrBind1 /><br />
    <h1>아래에 자식 컴포넌트</h1>
    <ButtonCounter />
    <AttrBind2 />
    <AttriBind3 />
    <DynaAttr1 />
    <Dynattr2 />
    <JSExpr />
    <EventHandler/>
    <CondRender/>
    <CondRender2/>
    <RefExam/>
    <DeepReactivity/>
    <ReactiveFn/>
    <ReactiveDiff/>
    <ReactiveDiff2/>
</template>


<style scoped>

</style>