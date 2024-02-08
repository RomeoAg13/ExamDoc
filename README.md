# IP Geo Localisation

Ce petit projet simple a été réalisé dans le but du module Documentation technique (Readme et apiDoc) de notre cursus de 2eme année de Bachelor dev web et application.

Ce dépot github contient le rendu du projet de fin effectué et rendu le 08/02.

# Initialisation + Librairies

### Front

Pour que le projet fonctionne comme voulu il est reccommandé de suivre les étapes ci-dessous dans l'ordre dans lequel elles sont données.

Inititialisation : `npm init -y`

Typescript : `npm install typescript --save-dev` puis `npx tsc --init` pour initialiser le projet TS pour obtenir tsconfig.json.

Axios : `npm install axios` qui nous servira à faire des requêtes HTTP.

Ensuite, créer le dossier Front puis y mettre tout les document.

### Back

Il faut créer le dossier back, cd dedans, puis effectuer les commandes suivantes :

Inititialisation : `npm init -y`

TypeScript + Express : `npm install @types/express @types/node` notre librairie pour gérer le serveur.

Nodemon : `npm install nodemon --save-dev` pour faciliter le lancement du serveur à chaque modification.

Dotenv : `npm install dotenv` pour faciliter les variables telles que le port, la clé API, etc...

Swagger : `npm install --save-dev @types/swagger-jsdoc @types/swagger-ui-express` pour avoir une page qui explique chacune des méthodes.

# Utilisation de l'API

Pour utiliser l'API, étant donné que nous travaillons sur un projet uniquement en back-end, il faudra utiliser l'URL pour rentrer les paramètres de recherche.

Celui-ci devra être entré à la fin de l'URL après le dernier `/`, voici un petit exemple de comment faire : `http://localhost:3000/ROUTEADEFINIR/127.0.0.1`

Les différentes routes de l'API et leurs fonctionalités seront visible sur la page http://localhost:3000/api-docs/ une fois que votre application sera fonctionelle.

Vous pouvez maintenant utiliser l'application comme bon vous semble en effectutant des requêtes de votre choix grâce à des outils tels que Postman.