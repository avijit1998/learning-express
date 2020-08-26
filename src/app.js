const path = require("path");
const express = require("express");

// console.log(__dirname);
// console.log(__filename);
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates");

const app = express();

//setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath));

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
