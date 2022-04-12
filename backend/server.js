const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const nodemon = require("nodemon");
const app = express();

require("dotenv").config();


app.use(cors());
app.use(bodyParser.json());


const URL = process.env.DB_URL;

  mongoose.connect(URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

  });

  const connection = mongoose.connection;

  connection.once("open", () => {

    console.log("MongoDb connection success!");

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));