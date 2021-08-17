// Récuperation ID
let searchParams = new URLSearchParams(window.location.search);
let recupId = searchParams.get('id');


console.log(recupId);



let _id = []

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
      <div id="containerCard">

        <div id="card" href="" ><li id="teddies" > 

        <div class="containerPhotoItem">
          <p><img src="${response.imageUrl}" id="imgItem" alt="Images ours" style="height:15rem;" ></p>

          <h2 id="h2TeddiesItem" class="h2Name"> ${response.name}</h2>
        </div>

        <div class="containerTextItem">
          <p class="row p-3 d-inline-block text-truncate"> ${response.description}</p>
          <p> <span class="spanCouleurs">Couleurs disponibles :</span> ${response.colors}</p>
                    
          <p class="priceFont"> ${response.price/100}€</p>

          <form class="formItem">
            <label class="labelItem" for="couleurProduit" >Choisir la couleur:</label>
            <select name="couleurProduit" id="couleurProduits" >
            </select>
  
          <button class="btnAcheter btnFont" class="row p-3 btn m-2" ${response._id} > Acheter </button>
          </div>

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


// Sélection couleur
let choixCouleur = document.querySelector("#couleurProduits");
/*

            <label for="quantiteProduit"> Choisir la quantité: </label>
            <select name="quantiteProduit" id="quantiteProduits"></select>
          </form>


//Choix quantité
let choixQuantite = `
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
`;
//affichage choix quantite page produit
let afficheChoixQuantite = document.querySelector("#quantiteProduits");
afficheChoixQuantite.innerHTML =choixQuantite;

//mettre choix quantite dans variable 
let choixQuantiteProduit = afficheChoixQuantite.value;
*/
// Sélection et envoi bouton acheter
let btnAcheter = document.querySelector(".btnAcheter");

console.log(btnAcheter);

btnAcheter.addEventListener('click', (event)=> {
//Pour ne pas réactualiser la page
event.preventDefault();

let optionCouleur = choixCouleur.value;
console.log(optionCouleur);

console.log(response)
// Récuperation valeurs formulaire
let optionsProduit = {
  name: response.name,
  recup_Id: response._id,
  couleur_Produit: optionCouleur,
  quantite: 1,
  price: response.price  /100,
};
console.log(optionsProduit)
//Local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
//json.parse pour convertir donnees au format JSON qui sont dans local storage en objet js


//pop up
let messageConf = () => {
  if(window.confirm(`L'article ${response.name} option: ${optionCouleur} est dans votre panier
  Veuillez appuyer sur OK pour voir le panier ou ANNULER pour retourner sur la page d'accueil`)){
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
})
