<template>
  <v-app>
    <v-app-bar app color="primary" dark>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
    },
    data() {
      return {
      }
    }
  };
</script>