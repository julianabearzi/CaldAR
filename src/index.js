const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
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
const MONGO_URL = process.env.CONNECTION_URL;

app.use(express.json());
app.use(cors());

app.use(boilersCategories);
app.use(boilersRoutes);
app.use(buildingsRoutes);
app.use(techniciansRoutes);
app.use(ConstructionRoutes);
app.use(maintenanceRoutes);

mongoose
  .connect(MONGO_URL)
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
