
/* A TESTER
const promise = fetch("");
promise.then (async (response) => {
  console.log (response);
  const data = await response.json();
  console.log(data);
});
*/
//Création variables
let _id = [];

// Fonction Fetch pour récupérer lien API format JSON et afficher dans console
fetch('http://localhost:3000/api/teddies')

  .then((response) => response.json())
  .then((response) => {    
      console.log(response);

//Création variable pour ajouter aux elements
    let htmlItem = "";

// Boucle pour récupérer articles API
    for(let i = 0; i < response.length; i++) {
      console.log(response[i].imageUrl);
      
//Création éléments HTML
htmlItem += ` 
<a id="containerTeddies" href="item.html?id=${response[i]._id}" > 

  <div id="containerCard" >

    <div id="card" href=""> 

      <p class="d-flex"><img id="imgAccueil"  src="${response[i].imageUrl}" alt="Images ours"></p>

      <div class="cardTitle">
        <h2 class="h2Name"> ${response[i].name}</h2>
        <span class="priceFont" > ${response[i].price/100}€</span>
      </div>

      <p> ${response[i].description}</p>

      <button id="btnArticle" class="btnFont"  ${response[i]._id} > Voir l'article </button>
    </div>
  </div>
</a>
      
      `;
      }
      
// Affichage dans l'objet Document dans la div HTML "Container"
        document.getElementById("containerProducts").innerHTML += htmlItem
})

// Méthode Catch pour afficher message erreur
  .catch(error => {
    console.log(error);
  });

