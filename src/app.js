const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1>Weather App</h1>");
});

app.get("/help", (req, res) => {
  res.send([
    { name: "Avijit", age: 22 },
    { name: "Andrew", age: 27 },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page!</h1>");
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Cloudy with chances of rain",
    location: "Bhubaneswar",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
