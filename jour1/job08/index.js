// import du module fs
const fs = require('fs');

// Chemin du fichier
const filePath = 'C:/Users/lucym/runtrack-nodeJS/jour1/job08/data.txt';

// Lecture asynchrone du contenu du fichier
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error("Erreur lors de la lecture du fichier :", err);
        return;
    }

    // Affichage d'une lettre sur deux
    let result = "";
    for (let i = 0; i < data.length; i += 2) {
        result += data[i];
    }

    console.log("Contenu du fichier data.txt :");
    console.log(result);
});