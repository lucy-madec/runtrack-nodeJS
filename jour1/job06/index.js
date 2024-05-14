// Import du module fs
const fs = require('fs');

// Chemin du fichier
const filePath = 'C:/Users/lucym/runtrack-nodeJS/jour1/job06/data.txt'

// Lecture synchrone du contenu du fichier
try {
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log("Contenu du fichier data.txt:");
    console.log(content);
} catch (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
}