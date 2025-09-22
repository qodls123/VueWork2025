<template>
    <div>
        <v-container>
            <div>header</div>
            <header>
                <slot name="header"></slot>
            </header>
            <hr></hr>
            <div>main</div>
            <main>
                <slot></slot>
            </main>
            <hr></hr>
            <div>footer</div>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </v-container>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>