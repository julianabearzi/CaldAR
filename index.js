const express = require('express');
const maintenanceRoutes = require('./routes/maintenance.routes');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(maintenanceRoutes);

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});