
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
<a href="item.html?id=${response[i]._id}" class="col-sm-12 col-md-4 col-lg-4 pb-3"> 

  <div id="containerCard">

    <div id="card" href="" style="text-decoration: none; color:black;" ><li id="teddies" class="d-flex flex-col card border shadow p-3 mt-5 animate-pulse rounded" style="background-color:#F3E9F0 ;"> 

      <p class="d-flex justify-content-center"><img class="img-fluid img-thumbnail mt-2 p-0 rounded h-64 w-full object-cover" src="${response[i].imageUrl}" alt="Images ours" style="height:15rem;" ></p>

      <div class="cardTitle" style="display: flex; align-items: center; ">

        <h2 class="col-10 style="font-weight:700; font-size: 14px; align-self:center;"> ${response[i].name}</h2>

        <span class="row  " style="font-weight:700; font-size: 14px;" style:"align-self:center; justify-content: end;"> ${response[i].price/100}€</span>
      </div>

      <p class="row p-3 d-inline-block text-truncate"> ${response[i].description}</p>

      <button class="row p-3 btn m-2" style="background-color:#E1BEE7;border-radius:15px;font-size: 12px; font-weight:500;" ${response[i]._id} > Voir l'article </button>
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

