// Import du module url
const url = require('url');

// Définition de l'URL
const URL = "https://www.google.com&search=nodejs";

// Récupération du protocole utilisé
const protocol = url.parse(URL).protocol;
console.log("Protocole utilisé :", protocol);

// Récupération du nom d'hôte
const hostname = url.parse(URL).hostname;
console.log("Nom d'hôte :", hostname);

// Récupération des paramètres de l'URL
const params = url.parse(URL, true).query;
console.log("Paramètres de l'URL :", params);

// Reformater l'URL avec un nouveau nom d'hôte
const newHostname = "www.laplateforme.io";
const newURL = url.format({
    protocol: protocol,
    hostname: newHostname,
    query: params
});
console.log("Nouvelle URL avec le nouveau nom d'hôte :", newURL);

// Ajout d'un paramètre à la nouvelle URL
const newParams = { ...params, additionalParam: "valeur" };
const updatedURL = url.format({
    protocol: protocol,
    hostname: newHostname,
    query: newParams
});
console.log("Nouvelle URL avec le paramètre ajouté :", updatedURL);
