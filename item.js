//Création variables
let locationSearch = window.location.search;
let id = locationSearch.slice(4);

// Fonction Fetch pour récupérer lien API format JSON et afficher dans console
fetch(`http://localhost:3000/api/teddies/${id}`)
.then((response) => response.json())
.then((response) => {    
    console.log(response);

//Création variable pour ajouter aux elements
    let htmlItem_item = "";
    let responseColors = response.colors

//Création boucle pour options couleurs
    for(let i = 0; i < responseColors.length; i++) {
        console.log(responseColors[i].name);

//Création éléments HTML
    htmlItem_item = ` 
      <div id="containerCard" class="col-sm-12 col-md-4 col-lg-4 pb-3  tada
      style="   border-radius:15px;">

        <div id="card" href="" style="text-decoration: none; color:black;" ><li id="teddies" class="d-flex flex-col card border shadow p-3 mt-5 animate-pulse rounded" style="background-color:#F3E9F0 ;"> 

          <p class="d-flex justify-content-center"><img class="img-fluid img-thumbnail mt-2 p-0 rounded h-64 w-full object-cover" src="${response.imageUrl}" alt="Images ours" style="height:15rem;" ></p>

          <div class="cardTitle"  style="display: flex; align-items: center; ">

            <h2 class="col-10 style="font-weight:700; font-size: 14px; align-self:center;"> ${response.name}</h2>

            <p class="row  " style="font-weight:700; font-size: 14px;" style:"align-self:center; justify-content: end;"> ${response.price/100}€</p>
          </div>

          <p class="row p-3 d-inline-block text-truncate"> ${response.description}</p>
        <p> Couleurs disponibles : ${response.colors}</p>
          <form>
            <label for="couleurProduit" >Choisir :</label>
            <select name="couleurProduit" id="couleurProduit" > 
                <option value=""> ${responseColors}</option>

            </select>
          </form>
  
          <h2 class="row p-3 btn m-2" style="background-color:#E1BEE7;border-radius:15px;font-size: 12px; font-weight:500;" ${response._id} > Acheter</h2>
        </div>
      </div>
    </a>
    `;
    }

// Affichage dans l'objet Document dans la div HTML "container_item"   
      document.getElementById("container_item").innerHTML = htmlItem_item
})
