const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

var mongojs = require('mongojs');
const { stringify } = require("querystring");
global.db = mongojs("mongodb+srv://Vinay:Vinay@sharktank.kodai7z.mongodb.net/DataBase");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://Vinay:Vinay@sharktank.kodai7z.mongodb.net/DataBase", {
useNewUrlParser: true,
useUnifiedTopology: true
});

const loginDetailsSchema = {
    userid: String,
    password: String
};

const LoginDetails = mongoose.model("LoginDetails", loginDetailsSchema);

app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express);


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/login",function(req,res){

    res.render("logIn");

})

app.post("/login",async function(req,res){
    let number =req.body.number;
    const name = req.body.name;

    console.log('details : ',number ,name);
    res.redirect("/");
});

app.listen(8000, function(){
    console.log("App is running on Port 8000");
});