<template>
  <div class="header-top">
    <div class="left">
      <SVGLogo />
    </div>
    <div class="right">
      <SVGuser></SVGuser>
      <router-link to="/" class="">Se connecter ou s'inscrire</router-link>
    </div>
  </div>
  <!-- header bottom -->
  <div class="header-bottom">
    <div class="link">
      <ul class="list-unstyled mb-0">
        <li>ACHETER UNE MONTRE</li>
        <li>VENDRE UNE MONTRE</li>
        <li>MAGAZINE</li>
        <li>COLLECTION</li>
        <li>FAQ</li>
        <li>CHECKOUT</li>
      </ul>
    </div>
  </div>

  <!-- dropdown1 -->

</template>
<script lang="ts">
import { defineComponent } from "vue";
import SVGLogo from "@/assets/logo.svg";
import SVGuser from "@/assets/user.svg";
import dropdowna from "@/components/header/dropdown/dropdowna.vue";

export default defineComponent({
  name: "header",
  components: {
    SVGLogo,
    SVGuser,
  }
});
</script>
