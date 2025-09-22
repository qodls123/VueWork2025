<template>
    <div>
        <v-container class="fill-height">
            <v-row justify="center" align-content="center">
                <div ref="title" class="title-text">
                    404 Page Not Found
                </div>
                <div class="break"></div>

                <div ref="subtitle" class="subtitle-text">
                    Oh! we couldn`t find that page.
                </div>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>

</script>


<style lang="scss" scoped>
    
</style>
<route lang="json">
{
    "path": "/:pathMatch(.*)*"
}

</route>