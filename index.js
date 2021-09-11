const express = require('express');
const mongoose = require('mongoose');
const boilersRoutes = require('./routes/boilers.routes');
const buildingsRoutes = require('./routes/buildings.routes');
const techniciansRoutes = require('./routes/technicians.routes');
const ConstructionRoutes = require('./routes/construction-company.routes');
const maintenanceRoutes = require('./routes/maintenance.routes');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(boilersRoutes);
app.use(buildingsRoutes);
app.use(techniciansRoutes);
app.use(ConstructionRoutes);
app.use(maintenanceRoutes);

mongoose.connect('mongodb+srv://user:test123@cluster0.taz6e.mongodb.net/CaldAR?retryWrites=true&w=majority')
.then((result) => {
  console.log(`Database connected`);
})
.catch((error) => {
   console.log(`Database no connected, error: ${error}`)
});

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


