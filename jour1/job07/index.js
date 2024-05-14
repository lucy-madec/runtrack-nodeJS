// Import du module fs
const fs = require('fs');

// Chemin du fichier
const filePath = 'C:/Users/lucym/runtrack-nodeJS/jour1/job07/data.txt';

// Lecture asynchrone du contenu du fichier
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error("Erreur lors de la lecture du fichier :", err);
        return;
    }
    console.log("Contenu du fichier data.txt :");
    console.log(data);
});