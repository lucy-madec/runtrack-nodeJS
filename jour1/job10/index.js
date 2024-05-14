// Import du module url
const url = require('url');

// Définition de l'URL
const URL = "https://www.google.com&search=nodejs";

// Récupération du protocole utilisé
const protocol = url.parse(URL).protocol;
console.log("Protocole utilisé :", protocol);