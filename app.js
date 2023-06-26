const express = require("express");
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running and listening to PORT:  ${PORT}`);
});


// connect to mongodb
const dbURI = process.env.DB_URI;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>{
    console.log('Connected to mongodb succesfully');
  })
  .catch((err) => console.log(err));



//Routes
app.get("/", (req, res) => {
  res.send("This is Home Page");
});

app.get("/plants-list", (req, res) => {
  res.send("This is Plants List Page");
});

app.get("/plant-details", (req, res) => {
  res.send("This is Plant Details Page");
});

app.get("/my-garden", (req, res) => {
  res.send("This is My Garden Page");
});

// Throw an error if the URL is not found
app.get("/*", (req, res) => {
  res.send("Oops, 404! Resources not found!!");
});
