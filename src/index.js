const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const boilersCategories = require('./routes/boilers-categories.routes');
const boilersRoutes = require('./routes/boilers.routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(boilersCategories);
app.use(boilersRoutes);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log(`Database no connected, error: ${error}`);
  });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
