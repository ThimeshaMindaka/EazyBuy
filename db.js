const { default: mongoose } = require("mongoose");
const mongeese = require("mongoose");
var mongoDBURL = 'mongodb+srv://Thimesha:Thimesha99@eazybuy.xm1yu.mongodb.net/EazyBuy'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect =  mongoose.connection

dbconnect.on('error' , ()=>{
    console.log('Mongo DB connection Failed ');
})

dbconnect.on('connected' , ()=>{
    console.log('Mongo DB connection Successfull ');
})
module.exports = mongoose