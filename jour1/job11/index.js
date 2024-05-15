// Import du module http
const http = require('http');

// Définition du port
const port = 8888;

// Création du serveur
const server = http.createServer((req, res) => {
    // Définition de l'en-tête de la réponse
    res.writeHead(200, { 'Conternt-Type': 'text/plain' });
    // Envoi la réponse
    res.end('Hello World!\n');
});

// Lancement du serveur
server.listen(port, () => {
    console.log("Serveur en cours d'exécution sur http://localhost:${port}/");
});