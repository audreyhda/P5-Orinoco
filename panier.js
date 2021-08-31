//Local storage
//json.parse pour convertir donnees au format JSON qui sont dans local storage en objet js
let products = JSON.parse(localStorage.getItem("products"));

//affichage produit panier 
var produitPanier = document.querySelector("#containerProduitPanier");
var tabPanier = document.querySelector(".tabPanier")

//si panier vide
if(products === null || products == 0){
    let panierVide = `
        <div class="containerPanierVide"> 
        <div>Le panier est vide </div>
        </div>
        `;
    produitPanier.innerHTML = panierVide;
}

//sinon affichage produits du localStorage
else {
    var panier = "";

    for (let i = 0; i < products.length; i++){
        panier = panier + `
      <div id="nomArticlePanier" class="eltPanier">${products[i].name} </div>
      <div class="eltPanier">${products[i].couleur_Produit}</div>
      <div class="eltPanier">Qté: ${products[i].quantite}</div>
      <div class="eltPanier">Prix: ${products[i].price} €</div>
        `;

        if(i == products.length -1){ 
            tabPanier.innerHTML = panier;
        }  
    }
};  

//bouton supprimer article
let btn_suppr = document.querySelector(".btnSuppr");

    btn_suppr.addEventListener ("click", (e) =>{
        e.preventDefault();

        let btnSupprimer = products.recup_id;

//methode filter pour supprimer btn cliqué
        products = products.filter(elt => elt.recup_id !== btnSupprimer);
        localStorage.setItem("products", JSON.stringify(products));
        alert("Article(s) supprimé(s) du panier");
//rechargement page
        window.location.href="panier.html";
    });

//montant total panier
let prixTotal = [];

for(let k=0; k < products.length; k++){
    let prixProduit=products[k].price;

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
const formulaire = () => {
//selection dom positionnement formulaire
    var affichageForm = document.querySelector(".formulaire");

    var structForm =`
        <h2 class="h2Name"> Renseigner vos coordonnées: </h2>
        <form class="formPanier">
        <div class= "idHtml"></div>
            <label for="prenom">Prénom</label><span id="prenomAlert" class="alerteInput"></span>
            <input id ="firstName" type="text" name="firstName" required></input>

            <label  for="nom">Nom</label><span id="nomAlert" class="alerteInput"></span></label>
            <input id="lastName"  type="text" name="lastName" required></input>

            <label for="adresse">Adresse</label><span id="adresseAlert" class="alerteInput"></span>
            <textarea id="address" name="address" required></textarea>          

            <label for="ville">Ville</label><span id="villeAlert" class="alerteInput"></span>
            <input id ="city" type="text" name="city" required></input>

            <label for="email">E-mail</label><span id="emailAlert" class="alerteInput"></span>
            <input id ="email" type="email"  name="email" pattern=".+@globex\.com"  placeholder="exemple@exemple.com" required></input>

            <button id="envoyer" class="btnFont"  type="submit" name="envoyer">Envoyer</button>
        </form>
    `;
    console.log(formulaire)
    affichageForm.insertAdjacentHTML("beforeend", structForm);
};
//affichage formulaire page
formulaire();

//validation des donnes du formulaire avant envoi au serveur avec Regex 
//expression fonction regex
let regexPrenomNomVille = (value) => {
    return /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/.test(value);
    };
let regexAdresse = (value) =>{
    return /^[0-9]\ ([A-Za-z]*)$/.test(value);
};
let regexEmail = (value) =>{
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/.test(value);
};

//Fonctions validité champs formulaire
// controle validite prenom
function prenomVerif (contact) {
    let prenomForm = contact.firstName;
if (regexPrenomNomVille(prenomForm)) {
    return true;
}else{
    document.querySelector("#prenomAlert").textContent= "Veuillez corriger le champ"
    return false;
}
};
// controle validite nom
function nomVerif (contact) {
    let nomForm = contact.lastName;

if (regexPrenomNomVille(nomForm)) {
    return true;
}else{
    document.querySelector("#nomAlert").textContent= "Veuillez corriger le champ"
    return false;
}
};  

// controle validite adresse
function adresseVerif (contact) {
    let addressForm = contact.address;
if (regexAdresse(addressForm)) {
    return true;
}else{
    document.querySelector("#adresseAlert").textContent= "Veuillez corriger le champ"
    return false;
}
};

// controle validite ville
function villeVerif (contact) {
    let villeForm = contact.city;
if (regexPrenomNomVille(villeForm)) {
    return true;
}else{
    document.querySelector("#villeAlert").textContent= "Veuillez corriger le champ"
    return false;
}
};

// controle validite email
function emailVerif (contact) {
    let emailForm = contact.email;
if (regexEmail(emailForm)) {
    return true;
}else{
    document.querySelector("#emailAlert").textContent= "Veuillez corriger le champ"
    return false;
}  
};

//Recup valeurs formulaire et le mettre dans LocalStorage
// Btn envoyer form et addEvent
let btnEnvoyerForm = document.querySelector("#envoyer");

var contact ="";

btnEnvoyerForm.addEventListener("click", (e) => {
    e.preventDefault();
  
//données form dans local localStorage
    contact = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
    };

//controle validité formulaire avant envoi
    if(prenomVerif(contact) && nomVerif(contact) && adresseVerif(contact) && villeVerif(contact) && emailVerif(contact) ){
    //objet contact dans localstorage
    e.preventDefault();

    localStorage.setItem("contact", JSON.stringify(contact))

       
    //envoyer les données du formulaire au serveur
    var envoyer = {
        products,
        contact,
        orderId,
        sommeProduit
        };
    console.log(envoyer);

    let cdeEnvoyée = "Commande envoyée";

// envoi objet "envoyer" au serveur
    fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST',
        body: JSON.stringify(envoyer),
        headers: {
            "Content-Type": "application/json",
            },
            mode:'cors',
    })
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log(response)
        document.getElementById("mainPanier").innerHTML = cdeEnvoyée;
        localStorage.setItem('contact', JSON.stringify(response.contact));
        localStorage.setItem('orderId', JSON.stringify(response.orderId));
        localStorage.setItem('sommeProduit', JSON.stringify(sommeProduit));
        localStorage.removeItem('mainPanier');
        localStorage.removeItem('products')
        window.location.href= "confirmation.html"
        console.log(envoyer); 
    })
    .catch(error => {
        console.log(error);
      });
    }
    else {
        alert("Veuillez vérifier les informations du formulaire")
    }
    console.log(response.json())
});

    /*if (prenomForm == undefined || prenomForm =="") {
        alert("Renseignez le champ prénom")
        document.getElementById("prenomAlert").innerHtml="Veuillez corriger";
        return false
    }
    if(regexPrenomNomVille(prenomForm)) {
        //appel fonction alerte messagevide
        document.getElementById("prenomAlert").innerHtml="";
        return true;
    }
    else {
        //appel fonction alerte message
        messAlert("prenomAlert");
        alert("Ne pas dépasser 20 caractères et aucun chiffres ni symboles")
        document.getElementById("prenomAlert").innerHtml="Veuillez corriger le prénom";
        return false;
    }    */