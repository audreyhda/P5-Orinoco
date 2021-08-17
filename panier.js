
//Local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
//json.parse pour convertir donnees au format JSON qui sont dans local storage en objet js


//affichage produit panier 

var produitPanier = document.querySelector("#containerProduitPanier");
var tabPanier = document.querySelector(".tabPanier")

//si panier vide

if(produitLocalStorage === null || produitLocalStorage == 0){
let panierVide = `
<div class="containerPanierVide"> 
<div>Le panier est vide </div>
</div>
`;
produitPanier.innerHTML = panierVide;
}

//sinon affichage produits du localStorage
else {
    var panier = [];


for (let i = 0; i < produitLocalStorage.length; i++){
panier = panier + `

      <div id="nomArticlePanier" class="eltPanier">${produitLocalStorage[i].name} </div>
      <div class="eltPanier">${produitLocalStorage[i].couleur_Produit}</div>
      <div class="eltPanier">Qté: ${produitLocalStorage[i].quantite}</div>
      <div class="eltPanier">Prix: ${produitLocalStorage[i].price} €</div>
      <div class="eltPanier"><button class="btnSuppr"> supprimer </button></div>

`;

if(i == produitLocalStorage.length){ 
}

    tabPanier.innerHTML = panier;

};


//bouton supprimer article
let btn_suppr = document.querySelectorAll(".btnSuppr");

for (let j=0; j< btn_suppr.length; j++) {
btn_suppr[j].addEventListener ("click", (e) =>{
    e.preventDefault();

    let btnSupprimer = produitLocalStorage[j].recup_id;

//methode filter pour supprimer btn cliqué
produitLocalStorage = produitLocalStorage.filter(elt => elt.recup_id !== btnSupprimer);
localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
alert("Article supprimé du panier");
//rechargement page
window.location.href="panier.html";
});


//montant total panier
let prixTotal = [];

for(let k=0; k < produitLocalStorage.length; k++){
    let prixProduit=produitLocalStorage[k].price;

    prixTotal.push(prixProduit);

};

//methode reduce pour additionner prix
let reducer =(accumulator, currentValue) => accumulator + currentValue;
let sommeProduit = prixTotal.reduce(reducer, 0);

let afficheTotal = `

    <div class="prixTotal">Total: ${sommeProduit} €</div>

`;
produitPanier.insertAdjacentHTML("beforeend", afficheTotal);


//formulaire panier
var formulaire = () => {
//selection dom positionnement formulaire
   var affichageForm = document.querySelector(".formulaire");

var structForm =`
<h2 class="h2Name"> Renseigner vos coordonnées: </h2>
<form class="formPanier">
    <label for="prenom" >Prénom</label><span id="prenomAlert" class="alerteInput"></span>
    <input id ="prenom" type="text" name="prenom" required></input>

    <label  for="nom" >Nom</label><span id="nomAlert" class="alerteInput"></span></label>
    <input id="nom"  type="text" name="nom" required></input>

    <label for="adresse" >Adresse</label><span id="adresseAlert" class="alerteInput"></span>
    <textarea id="adresse" name="adresse" required></textarea>          

    <label for="CP" >Code Postal</label><span id="cpAlert" class="alerteInput"></span>
    <input id ="CP" type="text" name="CP" size="5" required></input>

    <label for="ville" >Ville</label><span id="villeAlert" class="alerteInput"></span>
    <input id ="ville" type="text" name="ville" required></input>

    <label for="email" >E-mail</label><span id="emailAlert" class="alerteInput"></span>
    <input id ="email" type="email"  name="email" pattern=".+@globex\.com"  placeholder="exemple@exemple.com" required></input>

    <button id="envoyer" class="btnFont"  type="submit" name="envoyer" >Envoyer</button>

</form>
`;
console.log(formulaire)
affichageForm.insertAdjacentHTML("beforeend", structForm);
};
//affichage formulaire page
formulaire();


//Recup valeurs formulaire et le mettre dans LS
// Btn envoyer form et addevent
let btnEnvoyerForm = document.querySelector("#envoyer");

btnEnvoyerForm.addEventListener("click", (e) =>{
    e.preventDefault();

//données form dans local localStorage
const donnesForm = {
    prenom: document.querySelector("#prenom").value,
    nom: document.querySelector("#nom").value,
    adresse: document.querySelector("#adresse").value,
    CP: document.querySelector("#CP").value, 
    ville: document.querySelector("#ville").value,
    email: document.querySelector("#email").value,
}

//


//validation des donnes du formulaire avant envoi au serveur avec Regex 
//expression fonction regex
let regexPrenomNomVille = (value) => {
return /^[A-Za-z]{2,20}$/.test(value);
};

let regexAdresse = (value) =>{
    return /^[A-Za-z0-9\s]{10,50}$/.test(value);
};

let regexCP = (value) =>{
    return /^[0-9]{5}$/.test(value);
};
let regexVille = (value) =>{
    return /^[A-Za-z0-9\s]{10,50}$/.test(value);
};

let regexEmail = (value) =>{
    return /^[\w-]{2,4}$/.test(value);
};



//fonction texte affiché lorsque erreur input formulaire 
function messAlertVide (idHtml){
    document.querySelector(`#${idHtml}`).textContent ="";
};
function messAlert (idHtml){
    document.querySelector(`#${idHtml}`).textContent ="Veuillez remplir le champ correctement"
};

// controle validite prenom
function prenomVerif () {
    let prenomForm = donnesForm.prenom;
    if(regexPrenomNomVille(prenomForm)) {
        //appel fonction alerte messagevide
        document.querySelector("#prenomAlert").textContent="";
        /*
        messAlertVide("prenomAlert");
        */
        return true;
    }
    else {
        //appel fonction alerte message
        /*
        messAlert("prenomAlert");
        alert("Ne pas dépasser 20 caractères et aucun chiffres ni symboles")
        */
        document.querySelector("#prenomAlert").textContent="Veuiilez corriger";
        return false;
    }    
};

// controle validite nom
function nomVerif () {
    let nomForm = donnesForm.nom;
    if(regexPrenomNomVille(nomForm)) {
        messAlertVide("nomAlert");
        return true;
    }
    else {
        messAlert("nomAlert");
        alert("Doit être composé de 5 chiffres")
        return false;
    }    
};

// controle validite adresse
function adresseVerif () {
    let emailForm = donnesForm.adresse;
    if(regexAdresse(adresseForm)) {
        messAlertVide("adresseAlert");
        return true;
    }
    else {
        messAlert("adresseAlert");
        alert("Ne doit pas contenir de caractères spéciaux ou signes de ponctuation")
        return false;
    }    
};

// controle validite CP
function CPVerif () {
    let CPForm = donnesForm.CP;
    if(regexCP(CPForm)) {
        messAlertVide("cpAlert");
        return true;
    }
    else {
        messAlert("cpAlert");
        alert("Ne pas dépasser 20 caractères et aucun chiffres et symboles")
        return false;
    }    
};

// controle validite adresse
function villeVerif () {
    let adresseForm = donnesForm.nom;
    if(regexVille(adresseForm)) {
        messAlertVide("villeAlert");
        return true;
    }
    else {
        messAlert("villeAlert");
        alert("Ville invalide")
        return false;
    }    
};
// controle validite email
function emailVerif () {
    let emailForm = donnesForm.nom;
    if(regexEmail(emailForm)) {
        messAlertVide("emailAlert");
        return true;
    }
    else {
        messAlert("emailAlert");
        alert("Email invalide")
        return false;
    }    
};


//controle validité formulaire avant envoi
if(prenomVerif && nomVerif && CPVerif && adresseVerif && villeVerif && emailVerif ){
    //objet donnesForm dans localstorage
    localStorage.setItem("donnesForm", JSON.stringify(donnesForm))
}
else {
alert("Veuillez corriger les informations du formulaire")
};


//envoyer les données du formulaire au serveur
let envoyer = {
    produitLocalStorage,
    donnesForm,
};
console.log(envoyer);


//Garder info localstorage dans formulaire
let donnesLocalStorage = localStorage.getItem("donnesForm");

//Convertir chaine caractere en objet
let donnesLocalStorageConvert =JSON.parse(donnesLocalStorage);

function remplissageFormLocalStorage () {
document.querySelector(`#${input}`).value = donnesLocalStorageConvert[input];
};

remplissageFormLocalStorage("prenom");
remplissageFormLocalStorage("nom");
remplissageFormLocalStorage("adresse");
remplissageFormLocalStorage("CP");
remplissageFormLocalStorage("ville");
remplissageFormLocalStorage("email");
remplissageFormLocalStorage("numero");

});

};
};