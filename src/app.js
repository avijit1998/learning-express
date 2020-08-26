const path = require("path");
const express = require("express");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));
// console.log(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Cloudy with chances of rain",
    location: "Bhubaneswar",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
