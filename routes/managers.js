const express = require('express');
const router = express.Router();

let managers = [
    { id: 1, name: 'Charlie', department: 'Engineering' }
];

// GET all managers
router.get('/', (req, res) => {
    res.json(managers);
});

// POST new manager
router.post('/', (req, res) => {
    const newManager = req.body;
    managers.push(newManager);
    res.status(201).json({ message: 'Manager added', manager: newManager });
});

// PATCH manager by ID
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    let manager = managers.find(mgr => mgr.id == id);

    if (manager) {
        Object.assign(manager, updates);
        res.json({ message: 'Manager updated', manager });
    } else {
        res.status(404).json({ message: 'Manager not found' });
    }
});

// DELETE manager by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    managers = managers.filter(mgr => mgr.id != id);
    res.json({ message: `Manager with id ${id} deleted` });
});

module.exports = router;
