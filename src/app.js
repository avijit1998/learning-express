const path = require("path");
const express = require("express");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));
// console.log(__filename);

const app = express();

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Avijit",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Avijit",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message:
      "This is a test message written by the creator. A ring to rule them all.",
  });
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
