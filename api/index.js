const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const taskController = require("./controller/task.controller");

const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.get("/api/tasks", (req, res) => {
  taskController.getTasks().then((data) => res.json(data));
});

app.post("/api/tasks", (req, res) => {
  taskController.createTask(req.body).then((data) => res.json(data));
});

app.listen(port, () => {
  console.log(`Listening on ${port}!`);
});
