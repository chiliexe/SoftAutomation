const express = require('express');
const InactiveUserAndVehicle = require('./controllers/InactiveUserAndVehicle');
const app = express();
const port = 5500;


const inactiveUserAndVehicle = new InactiveUserAndVehicle();

app.get('/softruck/inactive/user-and-vehicle', (req, res) => {
    inactiveUserAndVehicle.execute();
    res.status(200);
})


app.listen(port, () => {
  console.log(`Server Up: http://localhost:5500/softruck/inactive/user-and-vehicle`)
})

