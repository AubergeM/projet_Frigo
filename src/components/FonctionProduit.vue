<script setup>
import { reactive, onMounted } from "vue";
import Produit from "../Produit.js";
import ProduitForm from "@/components/ProduitForm.vue";
import ProduitItem from "@/components/ProduitItem.vue";
import RechercheProduit from "@/components/RechercheProduit.vue";

const listeP = reactive([]);
const rechercheP = reactive([]);

// l'url de l'API
const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/3/produits";

function ajouterQuantite(produit) {
  console.log(produit);
  // ajouter la quantité
  produit.incrementer();
  // entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // la quantité modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({
      id: produit.id,
      nom: produit.nom,
      qte: produit.qte,
    }),
  };
  // la requête AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // actualiser la liste des produits
      getProduits();
    })
    .catch((error) => console.log(error));
}

function enleverQuantite(produit) {
  console.log(produit);
  // enlever la quantité
  produit.decrementer();
  // entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // la quantité modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({
      id: produit.id,
      nom: produit.nom,
      qte: produit.qte,
    }),
  };
  // la requête AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      if (produit.qte === 0) {
        supprimerProduit(produit.id);
      }
      // actualiser la liste des produits
      getProduits();
    })
    .catch((error) => console.log(error));
}

// supprimerProduit pour supprimer un produit à partir de son id
function supprimerProduit(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  // -- l'id du produit à supprimer doit être ajouté à la fin de l'url
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getProduits();
      rechercherProduit();
    })
    .catch((error) => console.log(error));
}

// ajouterProduit pour ajouter une nouveau produit à partir du formulaire de saisie
function ajouterProduit(nom, qte, photo) {
  console.log(nom);
  console.log(qte);
  console.log(photo);

  // fenetre pop-up si le nom incorrecte
  if (nom === "") {
    console.error("Le nom du produit ne peut pas être vide.");
    alert("Le nom du produit ne peut pas être vide.");
    return;
  }
  // fenetre pop-up si la qte incorrecte
  if (qte < 1 || qte === null) {
    console.error("La quantité ne peut pas être inférieure à 1 ou nulle");
    alert("La quantité ne peut pas être inférieure à 1 ou nulle.");
    return;
  }

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // les données du nouveau produit sont envoyées au serveur
  //  via le body de la req AJAX
  const data = { nom: nom, qte: qte, photo: photo };
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getProduits();
    })
    .catch((error) => console.log(error));
}

// requête AJAX pour récupérer les produits et les stocker dans la listeP
function getProduits() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // -- vider la liste des produits
      listeP.splice(0, listeP.length);
      // pour chaque donnée renvoyée par l'API
      //  créer un objet instance de la classe Produit
      //  et l'ajouter dans la liste listeP
      dataJSON.forEach((v) =>
        listeP.push(new Produit(v.id, v.nom, v.qte, v.photo)),
      );
    })
    .catch((error) => console.log(error));
}

function rechercherProduit(motcle) {
  const fetchOptions = { method: "GET" };
  fetch(url + "?search=" + motcle, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // -- vider la liste des produits
      rechercheP.splice(0, rechercheP.length);
      // pour chaque donnée renvoyée par l'API
      //  créer un objet instance de la classe Produit
      //  et l'ajouter dans la liste rechercheP
      dataJSON.forEach((v) =>
        rechercheP.push(new Produit(v.id, v.nom, v.qte, v.photo)),
      );
    })
    .catch((error) => console.log(error));
}

onMounted(() => {
  getProduits();
});
</script>

<template>
  <h3>Ajouter un produit</h3>
  <ProduitForm @addP="ajouterProduit"></ProduitForm>
  <ul>
    <div class="disposition">
      <ProduitItem
        v-for="produit of listeP"
        :key="produit.id"
        :produit="produit"
        @deleteP="supprimerProduit"
        @addQ="ajouterQuantite"
        @removeQ="enleverQuantite"
      />
    </div>
  </ul>
  <h3>Rechercher un produit</h3>
  <RechercheProduit @searchP="rechercherProduit"></RechercheProduit>
  <ul>
    <div class="recheche-disposition">
      <ProduitItem
        v-for="produit of rechercheP"
        :key="produit.id"
        :produit="produit"
        @deleteP="supprimerProduit"
        @addQ="ajouterQuantite"
        @removeQ="enleverQuantite"
      />
    </div>
  </ul>
</template>

<style scoped>
h3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #7bc1f3;
  padding: 10px;
  font-family: Arial, sans-serif;
  font-size: 20px;
  color: #eee7e7;
  text-align: center;
  text-shadow: #fffefe 10px 5px 10px;
  margin-top: 50px;
  border-radius: 10px;
}

.disposition {
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  margin-top: 20px;
}

.recheche-disposition {
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
}
</style>
