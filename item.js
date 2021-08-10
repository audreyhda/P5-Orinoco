// Récuperation ID
let locationSearch = window.location.search;
let recupId = locationSearch.slice(4);

let _id = [];

// Fonction Fetch pour récupérer lien API format JSON et afficher dans console
fetch(`http://localhost:3000/api/teddies/${recupId}`)
.then((response) => response.json())
.then((response) => {    
    console.log(response);

//Création variable pour ajouter aux elements
    let htmlItem_item = "";
    let responseColors = response.colors;


//Création éléments HTML
    htmlItem_item = ` 
      <div id="containerCard" class="col-sm-12 col-md-4 col-lg-4 pb-3  tada
      style="   border-radius:15px;">

        <div id="card" href="" style="text-decoration: none; color:black;" ><li id="teddies" class="d-flex flex-col card border shadow p-3 mt-5 animate-pulse rounded" style="background-color:#F3E9F0 ;"> 

          <p class="d-flex justify-content-center"><img class="img-fluid img-thumbnail mt-2 p-0 rounded h-64 w-full object-cover" src="${response.imageUrl}" id="imgItem" alt="Images ours" style="height:15rem;" ></p>

          <div class="cardTitle"  style="display: flex; align-items: center; ">

            <h2 class="col-10 style="font-weight:700; font-size: 14px; align-self:center;"> ${response.name}</h2>

            <p class="row  " style="font-weight:700; font-size: 14px;" style:"align-self:center; justify-content: end;"> ${response.price/100}€</p>
          </div>

          <p class="row p-3 d-inline-block text-truncate"> ${response.description}</p>
          <p> Couleurs disponibles : ${response.colors}</p>
          
          <form>
            <label for="couleurProduit" >Choisir :</label>
            <select name="couleurProduit" id="couleurProduits" >
            </select>
          </form>
  
          <button class="btnAcheter"  class="row p-3 btn m-2" style="background-color:#E1BEE7;border-radius:15px;font-size: 12px; font-weight:500;" ${response._id} > Acheter </button>
        </div>
      </div>
    </a>
    `;


// Affichage dans l'objet Document dans la div HTML "container_item"   
  document.getElementById("container_item").innerHTML = htmlItem_item

//Création boucle pour options couleurs
    let choice = document.querySelector("#couleurProduits");
    
    responseColors.forEach (function (colors) {
        let optionColor = document.createElement("option");
        optionColor.value = colors;
        optionColor.textContent = colors;
        choice.appendChild(optionColor);
    })
;


})



// Sélection couleur
let choixCouleur = document.querySelector("#couleurProduit");

// Sélection et envoi bouton acheter
let btnAcheter = document.querySelector(".btnAcheter");

btnAcheter.addEventListener('click', (event)=> {
//Pour ne pas réactualiser la page
event.preventDefault();

let optionCouleur = choixCouleur.value;
console.log(optionCouleur);

// Récuperation valeurs formulaire
let optionsProduit = {
  name: recupID.name,
  recup_Id: recupID._id,
  couleur_Produit: couleurProduit,
  quantite:1,
  price: recupId.price/100,
};

//Local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
//json.parse pour convertir donnees au format JSON qui sont dans local storage en objet js


//pop up
let messageConf = () => {
  if(window.confirm(`${recupID.name} option: ${couleurProduit} est dans votre panier
  Voir le panier OK ou retour à l'accueil ANNULER`)){
window.location.href = "panier.html";
  }else {
    window.location.href = "index.html";
  }
}
//si deja produit dans LocalStorage
if(produitLocalStorage){
  produitLocalStorage.push(optionsProduit);
  localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
  messageConf();
}
//si pas de produits dans LS
else {
  produitLocalStorage = [];
  produitLocalStorage.push(optionsProduit);
  localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
}
});


    