const express = require("express");
const HttpError = require("./models/http-error");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route handlers
app.get("/api", function (req, res) {
  res.send("Connected to backend");
});

app.get("/", function (req, res) {
  res.send('<h1>Hello World</h1> <a href="/api" >Click me</a>');
});

//Error handling
app.use((req, res, next) => {
  const error = new HttpError("Route not found", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Unknown error occurred" });
});

//Start listening on port 5000
app.listen(5000);
