const express = require('express');
const buildingsRoutes = require('./routes/buildings.routes');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(buildingsRoutes);

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});