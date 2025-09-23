<template>
    <div>
        <v-container class="fill-height">
            <v-row justify="center">
                <v-col cols="auto">
                    <v-img height="300" src="@/assets/blog.svg"></v-img>
                    <div class="text-body-1 font-weight-light">Welcom to</div>
                    <h1 class="text-h2 font-weight-bold">My Blog</h1>
                    <div class="py-14"></div>
                    <v-btn
                        color="primary"
                        to="/postlist"
                        min-width="228"
                        rel="noopener noreferrer"
                        size="x-large"
                        target="_blank"
                        variant="flat"
                    ><v-icon icon="mdi-account-group" size="large" start></v-icon>Blog</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>