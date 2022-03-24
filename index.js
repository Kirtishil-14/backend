const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// app.use(express.static(path.join(__dirname, 'Enter folder name')));

app.get('/', (req, res) => {
  res.send("Simple Express Application");
});

app.get("/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

app.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/json", (req, res) => {
  res.json({ "name": "Kirtishil Patil" });
});


app.listen(port, () => {
  console.log("running...");
});