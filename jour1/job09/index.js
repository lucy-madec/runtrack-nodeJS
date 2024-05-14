// Import du module fs
const fs = require('fs');

// Chemin du fichier
const filePath = 'C:/Users/lucym/runtrack-nodeJS/jour1/job09/data.txt';

// Nouveau contenu à écrire dans le fichier
const newContent = "Je manipule les fichiers avec un module node !";

// Écriture dans le fichier
fs.writeFile(filePath, newContent, (err) => {
    if (err) {
        console.error("Erreur lors de l'écriture dans le fichier :", err);
        return;
    }
    console.log("Contenu du fichier data.txt modifié avec succès !");
});