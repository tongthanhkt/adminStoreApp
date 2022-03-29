const express = require("express");
const products = require("./routes/products");
const app = express();
const PORT = 3000;
require("dotenv").config();
const { connectionDB } = require("./db/connect");
app.use(express.json());
app.use(express.static("./public"));
//app.use(express.static('./public'));
const start = async () => {
  try {
    await connectionDB(process.env.MONGO_URL);
    app.listen(PORT, console.log("Server connect on port 3000..."));
  } catch (error) {
    console.log(error);
  }
};
app.use("/api/v1/products", products);
start();
