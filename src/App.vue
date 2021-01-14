<template>
  <headers />
  <router-view />
</template>

<script lang="ts">
import headers from "@/components/header/index.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    headers
  }
});
</script>

<style lang="scss">
@import "assets/scss/style";
</style>
