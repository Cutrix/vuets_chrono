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
          <li>Patek Philippe</li>
          <li>Jaeger-LeCoultre</li>
          <li>Tudor</li>
          <li>Panerai</li>
          <li>IWC</li>
          <li>Longines</li>
          <li>Hamilton</li>
          <li>Chopard</li>
          <li>Breguet</li>
          <li>Vacheron Constantin</li>
          <li>Rolex</li>
          <li>Patek Philippe</li>
          <li>Jaeger-LeCoultre</li>
          <li>Tudor</li>
          <li>Panerai</li>
          <li>IWC</li>
          <li>Longines</li>
          <li>Hamilton</li>
          <li>Chopard</li>
          <li>Breguet</li>
          <li>Vacheron Constantin</li>
        </ul>
      </div>
      <!-- deuxieme colonne -->
      <div class="dropdown-col">
        <span class="title">Categories</span>
        <ul>
          <li>Montres hommes / Montres femmes</li>
          <li>Montres neuves / Montres d'occasion</li>
          <li>Montres mécaniques / Montres automatiques</li>
          <li>Montres vintage</li>
          <li>Panerai</li>
          <li>IWC</li>
          <li>Longines</li>
          <li>Hamilton</li>
          <li>Chopard</li>
          <li>Breguet</li>
          <li>Vacheron Constantin</li>
        </ul>
      </div>
      <!-- troisième colonne -->
      <div class="dropdown-col">
        <span class="title">Services</span>
        <ul>
          <li>Watch Collection</li>
          <li>Détermination de la valeur</li>
          <li>Recherche guidée</li>
          <li>Aperçu des professionnels</li>
          <li>Recherche avancée</li>
        </ul>
        <span class="fw-bold">Benzinger</span>
        <p>Achetez directement auprès de la marque</p>
        <img src="https://static.chrono24.com/images/default/indiebrands/benzinger/teaser-xs.jpg" alt="">
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
