const express = require('express');
const GetIccid = require('./controllers/GetIccid');
const InactiveUserAndVehicle = require('./controllers/InactiveUserAndVehicle');

const app = express();
const port = 5500;


const inactiveUserAndVehicle = new InactiveUserAndVehicle();
const getIccid = new GetIccid();

app.get('/softruck/inactive/user-and-vehicle', async (req, res) => {
  res.send("OK").status(200);
  await inactiveUserAndVehicle.execute();
})

app.get('/softruck/get/iccid', async (req, res) => {
  res.send("OK").status(200);
  await getIccid.execute();
})


app.listen(port, () => {
  console.log(`Server Up: /softruck/inactive/user-and-vehicle`)
})

