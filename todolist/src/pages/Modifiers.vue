<template>
    <div>
        <v-container>
        @click.stop
        <v-row class="my-2">
            <div style="background: #F98800;" class="pa-5 ma-2" @click="doThis('click outer div')">
                <v-btn @click="doThis('click a')">A</v-btn>
            </div>
            <div style="background: #F98800;" class="pa-5 ma-2" @click="doThis('click outer div')">
                <!-- 클릭 이벤트 전파 중지
                전파는 부모 엘리먼트로 전달, 버블링 -->
            </div>
        </v-row>
        <hr>
        @submit.prevent
        <v-row class="my-2">
            <form class="ma-2" @submit="onSubmit">
                <v-text-field></v-text-field>
                <v-btn type="submit">Submit</v-btn>
            </form>
            <!-- submit 이벤트가 더이상 페이지 리로드하지 않음 -->
             <form class="ma-2" @submit.prevent="onSubmit">
                <v-text-field></v-text-field>
                <v-btn type="submit">Submit</v-btn>
            </form>
        </v-row>
        <hr>
        @contextmenu.stop.prevent
        <v-row class="my-2">
            <div style="background: #F98800;" class="pa-5 ma-2" @contextmenu="doThis('click outer div')">
                <v-btn @contextmenu="doThis('click a')">A</v-btn>
            </div>
            <div style="background: #F98800;" class="pa-5 ma-2" @click="doThis('click outer div')">
                <!-- 수식어를 연결할수 없음 -->
                 <v-btn @contextmenu.stop.prevent="doThis('click a')">A</v-btn>
            </div>
        </v-row>
        <hr>
        @submit.prevent
        <v-row class="my-2">
            <form class="ma-2" @submit="onSubmit">
                <v-btn type="submit">Submit</v-btn>
            </form>
            <!-- 이벤트에 핸들러 없이 수식어만 사용가능 -->
             <form class="ma-2" @submit.prevent>
                <v-btn type="submit">Submit</v-btn>
            </form>
        </v-row>
        <hr>
        @click.self
        <v-row class="my-2">
            <!-- event.target이 엘리먼트 자신일 경우에만 핸들러가 실행
            예를들어 자식 앨리먼트에서 클릭 액션이 있으면 핸들러 실행 안함 -->
            <div style="background: #F98800;" class="pa-5 ma-2" @click.self="doThis('click outer div')">
                <!-- 수식어 연결가능 -->
                <v-btn @click="doThis('click a')">self</v-btn>
            </div>
        </v-row>
        <hr>
        @click.capture
        <v-row class="my-2">
            <div style="background: #F98800;" class="pa-5 ma-2" @click="doThis('click outer div')">
                <v-btn @click="doThis('click a')">A</v-btn>
            </div>
            <div style="background: #F98800;" class="pa-5 ma-2" @click.capture="doThis('click outer div')">
                <!-- 이벤트 리스너를 추가할때 캡처모드 사용
                내부 앨리먼트에서 클릭 이벤트 핸들러 실행되기 전에
                여기에서 먼저 핸들러가 실행 -->
                 <v-btn @click="doThis('click a')">A</v-btn>
            </div>
        </v-row>
        <hr>
        @click.once
        <v-row class="my-2">
            <!-- 클릭 이벤트는 단 한번만 실행 -->
            <div style="background: #F98800;" class="pa-5 ma-2" @click.capture="doThis('click outer div')">
                <v-btn @click.once="doThis('click a')">A</v-btn>
            </div>
        </v-row>
        </v-container>
    </div>
</template>

<script setup>
    const doThis = (msg) => {console.log(msg)}
    const onSubmit = () => {console.log('on submit')}
</script>

<style lang="scss" scoped>

</style>