<script setup>
import { ref } from "vue";
//données réactives pour la saisie des informations du produit
const nom = ref("");
const qte = ref("");
const photo = ref("");
const emit = defineEmits(["addP"]);

</script>

<template>
  <form @submit.prevent="$emit('addP', nom, qte, photo)">
    <input type="text" v-model="nom" placeholder="Nom du produit" />
    <input type="text" v-model="qte" placeholder="Quantité du produit" />
    <input class="inputP" type="text" v-model="photo" placeholder="Photo ?" title="Ajouter un lien vers une photo pour un meilleur visuel!" />
    <input type="submit" value="Ajouter" />
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #114c93;
  box-shadow: 2px 2px 0 #000000;
  padding: 20px;
  width: 250px;
  height: 260px;
  font-size: 18px;
  font-weight: Arial, sans-serif;
  letter-spacing: 1px;
  border-radius: 10px;
}

input[type="text"] {
  background-color: #7bc1f3;
  color: #fff;
  border: none;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  font-size: 16px;
  border-radius: 4px;
  font-family: Arial, serif;
}


input[type="submit"] {
  background-color: #7bc1f3;
  border: 1px solid #ffffff;
  border-radius: 4px;
  color: #ffffff;
  font-size: 16px;
  font-family: Arial, serif;
  cursor: pointer;
  margin: 10px;
  padding: 10px 20px;
  font-weight: bold;
  letter-spacing: 0.05em;
}


</style>
