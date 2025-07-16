const express = require('express');
const router = express.Router();

let employees = [
    { id: 1, name: 'Alice', position: 'Developer' },
    { id: 2, name: 'Bob', position: 'Designer' }
];

// GET all employees
router.get('/', (req, res) => {
    res.json(employees);
});

// POST new employee
router.post('/', (req, res) => {
    const newEmployee = req.body;
    employees.push(newEmployee);
    res.status(201).json({ message: 'Employee added', employee: newEmployee });
});

// PATCH (update) employee by ID
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    let employee = employees.find(emp => emp.id == id);

    if (employee) {
        Object.assign(employee, updates);
        res.json({ message: 'Employee updated', employee });
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
});

// DELETE employee by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    employees = employees.filter(emp => emp.id != id);
    res.json({ message: `Employee with id ${id} deleted` });
});

module.exports = router;
