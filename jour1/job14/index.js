const http = require('http');
const fs = require('fs');
const path = require('path');

// Définition du port
const port = 8888; // Par exemple, utilisez le port 8888

// Création du serveur
const server = http.createServer((req, res) => {
    let filePath = '';

    // Déterminer le chemin du fichier en fonction de l'URL
    if (req.url === '/') {
        filePath = path.join(__dirname, 'index.html');
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'about.html');
    } else {
        // Chemin vers la page d'erreur
        filePath = path.join(__dirname, 'error.html');
    }

    // Lire et servir le fichier HTML approprié
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erreur du serveur interne');
        } else {
            let contentType = 'text/html';
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

// Lancer le serveur
server.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}/`);
});
