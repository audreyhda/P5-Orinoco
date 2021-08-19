// Récuperation ID
let searchParams = new URLSearchParams(window.location.search);
let recupId = searchParams.get('id');
console.log(recupId);


let _id = "";

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
    <div id="card">
      <li id="teddies" > 
        <div class="containerPhotoItem">
          <img src="${response.imageUrl}" id="imgItem" alt="Images ours" style="height:15rem;">
          <h2 id="h2TeddiesItem" class="h2Name"> ${response.name}</h2>
        </div>

        <div class="containerTextItem">
          <p> ${response.description}</p>
          <p> <span class="spanCouleurs">Couleurs disponibles :</span> ${response.colors}</p>          
          <p class="priceFont"> ${response.price/100}€</p>

        <form class="formItem">
          <label class="labelItem" for="couleurProduit" >Choisir la couleur:
          </label>
          <select name="couleurProduit" id="couleurProduits" >
          </select>
          <button class="btnAcheter btnFont" class="row p-3 btn m-2" ${response._id} > Acheter 
          </button>
        </form>
      </div>

    </div>
  </div>
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
  });


// Sélection couleur
let choixCouleur = document.querySelector("#couleurProduits");

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
    }
    else {
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
