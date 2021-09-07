//Récupération des différents éléments dans le LocalStorage afin de les afficher sur la page confirmation
let contact = localStorage.getItem("contact");
console.log(contact);
let orderId = localStorage.getItem("orderId");
let sommeProduit = localStorage.getItem('sommeProduit');

let pageConf = document.querySelector("#orderConfirmation");
let html ="";

console.log(orderId);

html +=`
    <p class="eltConf"><span>${contact.firstName}</span>, merci pour votre achat sur notre site !</p>
    <p class="eltConf"> Votre commande d'un montant total de <span>${sommeProduit}</span>€ a été validée.</p>
    <p class="eltConf">Elle porte la référence <span>${orderId}</span>.</p>
    <p class="eltConf">Votre facture va vous être transmise par mail à : <span>${contact.email}</span>.</p>
    <p class="eltConf">Votre commande sera envoyée à l'adresse suivante :
    <div>
        <span>${contact.firstName} ${contact.lastName}</span>
        <span>${contact.address}</span>
        <span>${contact.city}</span>
    </div>
`
    pageConf.insertAdjacentHTML("beforeend", html);
/*
localStorage.removeItem('contact');
localStorage.removeItem('orderId');
localStorage.removeItem('sommeProduit');

*/