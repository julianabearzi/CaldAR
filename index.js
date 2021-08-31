const express = require('express');
const ConstructionRoutes = require('./routes/construction-company.routes');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(ConstructionRoutes);

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


