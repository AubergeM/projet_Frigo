<script setup>
import HeaderFrigo from "./components/HeaderFrigo.vue";
import FonctionProduit from "./components/FonctionProduit.vue";
import FooterProduit from "./components/FooterProduit.vue";
</script>

<template>
  <div class="background">
    <HeaderFrigo />
    <div class="liste">
      <FonctionProduit />
    </div>
    <div class="footer">
      <FooterProduit />
    </div>
  </div>
</template>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("/img/frigovide.jpg");
  background-size: cover;
  background-position: center;

  border-radius: 10px;
  margin-left: 0px;
}

.liste {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 20px;
  color: #114c93;
  font-weight: bold;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
