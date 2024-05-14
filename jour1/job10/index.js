// Import du module url
const url = require('url');

// Définition de l'URL
const URL = "https://www.google.com&search=nodejs";

// Récupération du protocole utilisé
const protocol = url.parse(URL).protocol;
console.log("Protocole utilisé :", protocol);

// Récupération du nom d'hôte
const hostname = url.parse(URL, true).query;
console.log("Paramètres de l'URL :", params);