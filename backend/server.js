import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import nodemon from 'nodemon';
import userRouter from './routes/userRoute.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);


const URL = process.env.DB_URL;

  mongoose.connect(URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

  });

  const connection = mongoose.connection;

  connection.once("open", () => {

    console.log("MongoDb connection success!");

});




app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));