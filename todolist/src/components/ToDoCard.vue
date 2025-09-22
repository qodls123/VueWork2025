<template>
    <div>
        <v-hover v-slot="{isHovering, props}">
        <v-card
            elevation="12"
            width="468"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            class="ma-4"
            v-bind="props"
        >
        <v-overlay
            :model-value="isHovering"
            class="align-center justify-center"
            scrim="orange"
            contained
        >
            <v-btn
                variant="flat" :to="`item/${item.id}`"
            >See more info(더보기)</v-btn>
        </v-overlay>

        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-subtitle>{{ item.create_at }} # {{ item.remote_ip }}</v-card-subtitle>
        <v-card-subtitle>DueTo {{ item.due_date }} D: {{ item.description }}</v-card-subtitle>
        <v-card-text>{{ item.content }}</v-card-text>
        <v-card-actions>
            <v-spancer></v-spancer>
            <v-btn size="small" color="surface-variant"
            variant="text" icon="mdi-heart"></v-btn>
            <v-btn size="small" color="surface-variant"
            variant="text" icon="mdi-bookmark"></v-btn>
            <v-btn size="small" color="surface-variant"
            variant="text" icon="mdi-share-variant"></v-btn>
        </v-card-actions>
        </v-card>
    </v-hover>
    </div>
</template>

<script setup>
    defineProps(['item'])
</script>

<style  scoped>
    .hover {
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.6;
    }
    .hover-btn {
        opacity: 1;
    }
</style>