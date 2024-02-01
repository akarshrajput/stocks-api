const express = require("express");
const path = require("path");

const stockRouter = require("./routes/stockRoute");
const viewRouter = require("./routes/viewRoute");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

// ROUTES
app.use("/", viewRouter);
app.use("/api/v1/stocks", stockRouter);

module.exports = app;
