const express = require('express');
const mongoose = require('mongoose');
const techniciansRoutes = require('./routes/technicians.routes');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(techniciansRoutes);

mongoose.connect('mongodb+srv://user:test123@cluster0.taz6e.mongodb.net/CaldAR?retryWrites=true&w=majority')
.then((result) =>{
console.log('Database connected')
})
.catch((error) =>{
  console.log(`Database not connected, error:${error}`)
})

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});