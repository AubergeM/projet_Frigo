<script setup>
defineProps(["produit"]);
const emit = defineEmits(["deleteP", "addQ", "removeQ"]);
</script>

<template>
  <li>
    <div class="produit">
      <div class="produit-item">
        <h1 class="nom">{{ produit.nom }}</h1>
        <div class="stock">
          <p> Stock : <span class="quantite">{{produit.qte}}</span></p>
          <img :src="produit.photo"  />
          <div class="bouttons">
          <button class="boutton" @click="$emit('addQ', produit)">+</button>
          <button class="boutton" @click="$emit('removeQ', produit)">-</button>
          </div>
          <div class="supprimer">
            <button class="boutton-sup" @click="$emit('deleteP', produit.id)"><img src="/img/poubelle1.jpg" alt="icône poubelle"></button>
          </div>
        </div>   
      </div>
    </div>
  </li>
</template>

<style>

li{
  background-color: #f9fbfd;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  margin-right: 40px;
  width: 200px;
  height: 370px;
  padding: 20px;
  margin-bottom: 20px;
}

button {
  background-color: rgb(17, 76, 147);
  border: 0 solid rgb(17, 76, 147);
  border-radius: 10px;
  color: #ffffff;
  font-size: 14px;
  font-family: Arial, serif;
  box-shadow: 2px 2px 0 #000000;
  cursor: pointer;
  margin: 10px;
  padding: 8px 16px;
}

.nom{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.produit{
  background-image: url("/img/poubelle1.png");
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  margin-right: 40px;
  width: 160px;
  height: 100px;
  padding: 20px;
  margin-bottom: 20px;
}

.produit-item{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.stock{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  text-shadow: rgba(254, 253, 253, 0.85) 5px 0 5px;
  color: rgb(17, 76, 147);
  margin-left: -10px;
  margin-top: 20px;
}

img{
  width: 50px;
  height: 50px;
}



</style>
