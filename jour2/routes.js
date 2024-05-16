const express = require('express');
const fs = require('fs');
const { describe } = require('node:test');
const path = require('path');
const { title } = require('process');
const router = express.Router();

const dataFilePath = path.join(__dirname, 'data.json');

// Fonction d'aide pour lire les données du fichier
function readData() {
    const data = fs.readFileSync(dataFilePath, ('ut8'));
    return JSON.parse(data);
}

// Fonction d'aide pour écrire des données dans le fichier
function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

// Roue pour récupérer toutes les tâches
router.get('/taksks', (req, res) => {
    const data = readData();
    res.json(data);
});

// route pour créer une nouvelle tâche
router.post('/tasks', (req, res) => {
    const data = readData();
    const newTask = {
        id: Date.now().toString(),
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    };
    data.push(newTask);
    writeData(data);
    res.status(201).json(newTask);
});

// Route pour mettre à jour une tâche
router.put('/tasks/:id', (req, res) => {
    const data = readData();
    const taskIndex = data.findIndex(task => task.id === req.params.id);

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Tâche non trouvée' });
    }

    data[taskIndex] = { ...data[taskIndex], ...req.body };
    writeData(data);
    res.json(data[taskIndex]);
});

// Route pour supprimer une tâche
router.delete('/tasks/:id', (req, res) => {
    const data = readData();
    const newData = data.filter(task => task.id !== req.params.id);

    if (newData.length) {
        return res.status(404).json({ message: 'Tâche non trouvée' });
    }

    writeData(newData);
    res.status(204).send();
})

module.exports = router;