const express = require('express');
const boilersRoutes = require('./routes/boilers.routes');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(boilersRoutes);

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});