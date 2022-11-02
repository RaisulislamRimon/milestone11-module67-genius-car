const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

console.log(process.env.DB_USER);

app.get("/", (req, res) => {
  res.send("geinus-car-server is running");
});

app.listen(port, () => {
  console.log(`genius-car-server running on ${port}`);
});
