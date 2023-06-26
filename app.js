const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`Server is running and listening to PORT:  ${PORT}`);
});
