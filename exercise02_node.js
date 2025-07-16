const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const employeeRoutes = require('./routes/employees');
const managerRoutes = require('./routes/managers');

app.use('/employees', employeeRoutes);
app.use('/managers', managerRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});