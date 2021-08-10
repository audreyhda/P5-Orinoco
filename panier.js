
//Local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
//json.parse pour convertir donnees au format JSON qui sont dans local storage en objet js
console.log(produitLocalStorage);

//affichage produit panier 

let produitPanier = document.querySelector("#containerProduitPanier");

//si panier vide
if(produitLocalStorage === null || produitLocalStorage == 0){
let panierVide = `
<div class="containerPanierVide"> 
<div>Le panier est vide </div>
</div>
`;
produitPanier.innerHTML = panierVide;
}
//affichage produits du localStorage
else{
let panier = [];
for (let i=0; i<produitLocalStorage.length; i++);
panier = panier + `
<div class="recap">
<div>Quantité 1 - ${produitLocalStorage[i].name} Couleur: ${produitLocalStorage[i].couleurProduit}</div>
<div>${produitLocalStorage[i].price} € - <button class="btnSuppr">supprimer</button></div>
</div>
`
if(i == produitLocalStorage.length){
    produitPanier.innerHTML = panier;
}

//bouton supprimer article
let btn_suppr = document.querySelectorAll(".btnSuppr");

for (let j=0; j< btn_suppr.length; j++) {
btnSupp[j].addEventListener ("click", (e) =>{
    e.preventDefault();

    let btnSupprimer = produitLocalStorage[j].recupId;

//methode filter pour supprimer btn cliqué

produitLocalStorage = produitLocalStorage.filter( elt => elt.recupId !== btnSupprimer);
localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
alert("Article supprimé du panier");
window.location.href="panier.html";

});

}

//montant total panier
let prixTotal = [];

for(let k=0; k< produitLocalStorage.length; k++){
    let prixProduit=produitLocalStorage[k].price;

    prixTotal.push(prixProduit);

};
//methode reduce pour additionner prix
let reducer =(accumulator, currentValue) => accumulator + currentValue;
let sommeProduit = prixTotal.reduce(reducer, 0);

let afficheTotal = `
<div class="">Total : ${sommeProduit} € </div>
`
produitPanier.insertAdjacentHTML("beforeend", afficheTotal);




//formulaire panier

let formulaire = ()=> {

    let affichageForm = document.querySelector(".formulaire");


let structForm =`
<form>
<label for="prenom" >Prénom</label><span id="prenomAlert" class="alerteInput"></span>
<input type="text" id="" name="" required></input>

<label for="nom" >Nom</label><span id="nomAlert" class="alerteInput"></span>
<input type="text" id="nom" name="nom" required></input>

<label for="adresse" >adresse</label><span id="adresseAlert" class="alerteInput"></span>
<textarea id="adresse" name="adresse" required></textarea>          

<label for="CP" >Code Postal</label><span id="cpAlert" class="alerteInput"></span>
<input type="text" id="CP" name="CP" size="5" required></input>

<label for="ville" >Ville</label><span id="villeAlert" class="alerteInput"></span>
<input type="text" id="ville" name="ville" required></input>

<label for="email" >E-mail</label><span id="emailAlert" class="alerteInput"></span>
<input type="email" id="email" name="email" pattern=".+@globex\.com"  placeholder="exemple@exemple.com" required></input>

<button id="envoyer" type="submit" name="envoyer" >Envoyer</button>>

</form>
`;

affichageForm.insertAdjacentHTML("afterend", structForm);
formulaire();

// Btn envoyer form et event
let btnEnvoyerForm = document.querySelector("#envoyer");
btnEnvoyerForm.addEventListener("click", (e) =>{
    e.preventDefault();

//données form dans local localStorage
let donnesForm = {
prenom:document.querySelector("#prenom").value ,
nom: document.querySelector("#nom").value,
adresse: document.querySelector("#adresse").value ,
CP: document.querySelector("#CP").value , 
ville: document.querySelector("#ville").value ,
email: document.querySelector("#email").value,
}





//validation des donnes du formulaire avant envoi au serveur avec Regex 
//expression fonction regex
let regexPrenomNomVille = (value) => {
return /^[A-Za-z]{2,20}$/.test(value);
};

let regexAdresse = (value) =>{
    return /^[A-Za-z0-9\s]{10,50}$/.test(value);
}

let regexCP = (value) =>{
    return /^[0-9]{5}$/.test(value);
}
let regexVille = (value) =>{
    return /^[A-Za-z0-9\s]{10,50}$/.test(value);
}

let regexEmail = (value) =>{
    return /^[w-\.]@([\w-]+\.)+[\w-]{2,4}$/.test(value);
}
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
        messAlertVide("prenomAlert");
        return true;
    }
    else {
        //appel fonction alerte message
        messAlert("prenomAlert");
        alert("Ne pas dépasser 20 caractères et aucun chiffers et symboles")
        return false;
    }    
}

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
}

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
}

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
}

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
}
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
}


//controle validité formulaire avant envoi
if(prenomVerif && nomVerif && CPVerif && adresseVerif && villeVerif && emailVerif  ){
    //objet donneesForm dans localstorage
    localStorage.setItem("donneesForm", JSON.stringify(donnesForm))
}
else (
alert("Veuillez corriger les informations du formulaire")
);

//

let envoyer = {
    produitLocalStorage,
    donneesForm,
}
console.log(envoyer);

//Garder info localstorage dans formulaire
let donnesLocalStorage =localstorage.getItem("donnesForm");

//Vonvertir chaine caractere en objet
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

/*
//inserer localstorage dans formulaire
document.querySelector("#prenom").setAttribute("value", donnesLocalStorageConvert.prenom)
document.querySelector("#nom").setAttribute("value", donnesLocalStorageConvert.nom)
document.querySelector("#adresse").setAttribute("value", donnesLocalStorageConvert.adresse)
document.querySelector("#CP").setAttribute("value", donnesLocalStorageConvert.CP)
document.querySelector("#ville").setAttribute("value", donnesLocalStorageConvert.ville)
document.querySelector("#numero").setAttribute("value", donnesLocalStorageConvert.numero)

*/



});

};

};