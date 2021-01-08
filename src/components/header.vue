<template>
  <div class="header-top">
    <div class="left">
      <SVGLogo></SVGLogo>
    </div>
    <div class="right">
      <SVGuser></SVGuser>
      <router-link to="/" class="">Se connecter ou s'inscrire</router-link>
    </div>
  </div>
  <!-- header bottom -->
  <div class="header-bottom">
    <div class="link">
      <ul class="list-unstyled">
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
  <div class="dropdown">
    <div class="dropdown-row">
      <!-- premiere colonne -->
      <div class="dropdown-col">
        <span class="title">Marques</span>
        <ul>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
        </ul>
      </div>
      <!-- deuxieme colonne -->
      <div class="dropdown-col">
        <span>Marques</span>
        <ul>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
          <li>Rolex</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SVGLogo from "@/assets/logo.svg";
import SVGuser from "@/assets/user.svg";

export default defineComponent({
  name: "header",
  components: {
    SVGLogo,
    SVGuser
  }
});
</script>
