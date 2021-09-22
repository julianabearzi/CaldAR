const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const boilersCategories = require('./routes/boilers-categories.routes');
const boilersRoutes = require('./routes/boilers.routes');
const buildingsRoutes = require('./routes/buildings.routes');
const techniciansRoutes = require('./routes/technicians.routes');
const ConstructionRoutes = require('./routes/construction-company.routes');
const maintenanceRoutes = require('./routes/maintenance.routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(boilersCategories);
app.use(boilersRoutes);
app.use(buildingsRoutes);
app.use(techniciansRoutes);
app.use(ConstructionRoutes);
app.use(maintenanceRoutes);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log(`Database no connected, error: ${error}`);
  });

app.get('/', (req, res) => {
  res.send('hi');
});
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
