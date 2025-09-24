<template>
    <v-container class="bg-surface-variant mt-4">
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col cols="4">
        <v-sheet class="pa-2 ma-2">
          .v-col-4
        </v-sheet>
      </v-col>
      <v-col
        cols="4"
        offset="4"
      >
        <v-sheet class="pa-2 ma-2">
          .v-col-4 .offset-4
        </v-sheet>
      </v-col>
    </v-row>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        cols="3"
        offset="3"
      >
        <v-sheet class="pa-2 ma-2">
          .v-col-3 .offset-3
        </v-sheet>
      </v-col>
      <v-col
        cols="3"
        offset="3"
      >
        <v-sheet class="pa-2 ma-2">
          .v-col-3 .offset-3
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        cols="6"
        offset="3"
      >
        <v-sheet class="pa-2 ma-2">
          .v-col-6 .offset-3
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="bg-surface-variant">
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        md="6"
        sm="5"
      >
        <v-sheet class="pa-2 ma-2">
          .v-col-sm-5 .v-col-md-6
        </v-sheet>
      </v-col>
      <v-col
        md="6"
        offset-md="0"
        offset-sm="2"
        sm="5"
      >
        <v-sheet class="pa-2 ma-2">
          .v-col-sm-5 .offset-sm-2 .v-col-md-6 .offset-md-0
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        lg="6"
        md="5"
        sm="6"
      >
        <v-sheet class="pa-2 ma-2">
          sm-6 md-5 lg-6
        </v-sheet>
      </v-col>
      <v-col
        lg="6"
        md="5"
        offset-lg="0"
        offset-md="2"
        sm="6"
      >
        <v-sheet class="pa-2 ma-2">
          .v-col-sm-6 md-5 .offset-md-2 .v-col-lg-6 .offset-lg-0
        </v-sheet>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>