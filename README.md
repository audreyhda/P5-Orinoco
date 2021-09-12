# Orinoco #

This is the back end server for Project 5 of the Junior Web Developer path.

### Prerequisites ###

You will need to have Node and `npm` installed locally on your machine.

### Installation ###

Clone this repo. From within the project folder, run `npm install`. You 
can then run the server with `node server`. 
The server should run on `localhost` with default port `3000`. If the
server runs on another port for any reason, this is printed to the
console when the server starts, e.g. `Listening on port 3001`.

//////////


Orinoco
Cinquième projet du parcours développeur web chez OpenClassrooms.

L'objectif principale consiste en la création du front-end d'un site e-commerce en vanilla Javascript par la consommation d'un API préalablement fourni ( JWDP5 ).

Il ne s'agit là que d'un MVP, aucune réelle gestion des transaction n'est effectué.

Aucune maquette n'est donnée. Il est demandé d'improviser l'interface utilisateur.


Cahier des charges

TODO

 -Vérifier que les inputs sont corrects avant l'envoi au back-end
 -Terminer plan de test
 
Général

 -Création d'une page présentant tous les produits
 -Création d'une page présentant les détails d'un produit et la possibilité de l'ajouter au panier.
 -Création d'une page panier contenant la liste des produits présents ainsi qu'un formulaire pour effectuer l'achat
 -Création d'une page de remerciement après achat
 -Les pages devront être créés en HTML, CSS (frameworks de votre choix acceptés) et vanilla javascript (sans framework)
 
Qualité de code

 -Le code devra être indenté
 -Le code devra contenir des commentaires
 -Les promesses devront être utilisées lors des appels ajax
 -Le code devra être accompagné d'un document planifiant de futurs test unitaires
 
Expérience utilisateur

 -Les inputs du formulaire d'achat devront être validés avant l'envoi à l'API.
 
Tester l'application web

-Tester le site en ligne
Pour tester simplement l'application web, rendez-vous sur orinoco.mathisbarre.com

-Tester le site en local
Prérequis
Node.js (version 14.15.1 LTS utilisée durant le développement)
NPM (version 6.14.8 utilisée durant le développement)
Installation
npm install
Compilation tailwind -> css
npm run compile-css
Lancement de l'application
Ouvrez simplement le fichier index.html, aucun serveur n'est requis.

Pour le développement, il est conseillé d'utiliser l'extension "Live Server" de Visual Studio Code

Documents
Pour en savoir plus, veuillez consulter le document complet disponible ici

//////////////////

Construisez un site e-commerce


Mis à jour le mardi 6 juillet 2021

Scénario

Félicitations ! Vous avez été recruté en tant que développeur front-end par Orinoco, une entreprise de commerce en ligne. 


Son credo ? Se démarquer des grands site e-commerce comme Amazon en créant des applications thématiques ne vendant qu’un seul groupe de produits. Il y a par exemple Oribook pour les livres ou Oritextil pour les vêtements.

Vos compétences en développement web et votre personnalité ont plu à Paul, le fondateur de l’entreprise.

Dans un premier temps, Paul souhaite créer un premier MVP pour démontrer le fonctionnement de ses applications à ses investisseurs.

L’équipe est constituée de Jeanne, développeuse back-end travaillant sur les API et vous, pour la partie front-end.

À votre arrivée, vous trouvez un mail de Paul dans votre boîte mail.

 

De: Paul 

À: vous

-----------------------------------------------------------------------------------

Objet : Bienvenue !

Bonjour et bienvenue chez Orinoco ! J’espère que tu te plairas parmi nous. J’ai vraiment hâte de montrer ce MVP aux investisseurs. Il faut qu’on les rassure car ils misent sur nous. :)
Jeanne s’occupera du back-end et toi du front.

Avec l’équipe, on a déjà pas mal bossé sur le cahier du MVP. Cela te fera une bonne base pour avancer. Tu trouveras en pièce jointe les spécifications.

N'hésite pas à venir me voir si tu as la moindre question, ma porte est toujours ouverte.

Paul

Fondateur de Orinoco


Spécifications Orinoco

 Paul vous envoie également des messages sur le système de messagerie instantanée de l’entreprise pour vous apporter quelques précisions complémentaires.

 

Paul > Hello, comme je sais que tu débutes, voici quelques informations qui pourront t’aider pour réaliser le front de l’application. TU vas avoir besoin de deux fonctionnalités JavaScript pour mener à bien ta missions. localStorage pour le panier et les paramètres de requête de l’URL pour la page « produit ».

Moi > Super, merci !

Paul > Je souhaiterais également que tu réalises un plan de tests pour montrer comment l’application devrait être testée.

Moi > Est-ce que tu souhaites un format particulier pour le plan de tests ?

Paul > Je te laisse libre choix pour le format du plan de tests.

Moi > Ok ! C’est parti alors !
La conversation instantanée entre Paul et vous
Vous gardez en tête toutes ces informations et attaquez le développement immédiatement.

Compétences évaluées:

Créer un plan de test pour une application

Interagir avec un web service avec JavaScript

Valider des données issues de sources externes

Gérer des événements JavaScript
