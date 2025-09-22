<template>
    <div>
        <BaseLayout>
            <template v-slot:header>
                <h1>다음은 페이지 제목일 수 있습니다.</h1>
            </template>
            
            <p>주요 내용에 대한 단락입니다.</p>
            <p>그리고 또 하나.</p>

            <template #footer>
                <p>다음은 연락처 정보입니다.</p>
            </template>
        </BaseLayout>
    </div>
</template>

<script setup>

import BaseLayout from '@/components/BaseLayout.vue';
</script>

<style lang="scss" scoped>

</style>