// Importation des modules http et fs
const http = require('http');
const fs = require('fs');
const path = require('path');

// Définition du port
const port = 8888;

// Création du serveur
const server = http.createServer((req, res) => {
    let filePath = '';

    // Détermination du chemin du fichier en fonction de l'URL
    if (req.url === '/') {
        filePath = path.join(__dirname, 'index.html');
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'about.html');
    }

    // Lecture et récupération du fichier HTML approprié
    fs.readFile(filePath, (err, data) => {
        if (!err) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

// Lancement du serveur
server.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}/`);
});
