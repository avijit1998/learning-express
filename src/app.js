const path = require("path");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const express = require("express");
const hbs = require("hbs");
const request = require("request");

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

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
    title: "Help Page",
    name: "Avijit",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must enter address",
    });
  }

  const location = req.query.address;

  geocode(location, (error, { longitude, latitude, location } = {}) => {
    if (error) {
      return res.send({
        error,
      });
    }

    forecast(longitude, latitude, (error, forecastData) => {
      if (error) {
        return res.send({
          error,
        });
      }

      res.send({
        forecast: forecastData,
        location,
        address: req.query.address,
      });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("error", {
    title: "help article",
    message: "Help article not found",
    name: "avijit",
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    message: "Page not found",
    title: "404",
    name: "Avijit",
  });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
