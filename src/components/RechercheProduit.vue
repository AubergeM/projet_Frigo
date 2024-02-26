<script setup>
defineProps(["produit"]);
const emit = defineEmits(["searchP"]);


</script>

<template>
    <form @submit.prevent="$emit('searchP', motcle)">
      <input type="text" v-model="motcle" placeholder="Produit à trouver" />
      <input type="submit" value="Rechercher" />
    </form>
</template>

<style scoped>

form {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #114c93;
  box-shadow: 2px 2px 0 #000000;
  padding: 20px;
  width: 500px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
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
  border-radius: 20px;
  color: #ffffff;
  font-size: 16px;
  font-family: Arial, serif;
  cursor: pointer;
  margin: 10px;
  padding: 8px 15px;
  font-weight: bold;
  letter-spacing: 0.05em;
}



</style>