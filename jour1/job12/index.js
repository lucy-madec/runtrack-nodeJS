// Import des modules http et js
const http = require('http');
const fs = require('fs');
const path = require('path');

// Définition du port
const port = 8888;

// Création du serveur
const server = http.createServer((req, res) => {
    // Chemin vers le fichier index.html
    const filePath = path.join(__dirname, 'index.html');

    // Lecture du fichier index.html
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erreur du serveur interne');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

// Lancement du serveur
server.listen(port, () => {
    console.log("Serveur en cours d'exécution sur http://localhost:${port}/");
});