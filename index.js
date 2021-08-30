const express = require('express');
const techniciansRoutes = require('./routes/technicians.routes');
const app = express();

const PORT = 3000;
app.use(express.json());
app.use(techniciansRoutes);


app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});




