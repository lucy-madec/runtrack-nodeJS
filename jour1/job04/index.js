// Import du module fs
const fs = require('fs');

// Lecture du contenu du répertoire courant
fs.readdir('.', {withFileTypes: true}, (err, files) => {
    if (err) {
        console.error('Erreur lors de la lecture du répertoire :', err);
        return;
    }

    // Filtrage des dossiers
    const directories = files.filter(file => file.isDirectory());

    // Affichage des noms des dossiers
    console.log("Dossiers présents dans le répertoire courant :");
    directories.forEach(directory => {
        console.log(directory.name);
    });
});