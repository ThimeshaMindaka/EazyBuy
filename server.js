const express = require("express");
const cors = require("cors");

const app = express()
app.use(cors())
var dbconnection = require ('./db')
var productsRoute = require('./routes/productsRoute')

app.use('/api/products/' , productsRoute)

app.get("/" , (req, res) => {

    res.send('This is from Backend')
});



const port = 8000;

app.listen(port, () => console.log(`Node JS Server Started`));
