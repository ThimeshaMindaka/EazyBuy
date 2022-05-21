const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const nodemon = require('nodemon');
const app = express();

require('dotenv').config();

//app.get('/api/products', (req, res)=> {
// res.send(data.products);
//});
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const URL = process.env.DB_URL;

mongoose.connect(URL, {
  //useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDb connection success!');
});

//import route
const feedbackRouter = require('./routes/feedbackRoute.js');

//route middleware
app.use('/Feedback', feedbackRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running in port no : ${port}`);
});
