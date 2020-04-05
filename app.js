//=============================================================================
//Adding dependencies
//=============================================================================

var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	passport = require("passport"),
	localStrategy = require("passport-local"),
	mongoose = require("mongoose"),
	methodOverride = require("method-override");

var patientModel = require("./models/patient.js"),
	dayModel = require("./models/day.js");

var patientsRoutes = require("./routes/patients"),
	daysRoutes = require("./routes/days");

//=============================================================================
//Connecting the database
//=============================================================================

mongoose.connect("mongodb://localhost/Hack-The-Crisis");


//=============================================================================
//Configurations
//=============================================================================

var app = express();
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));




//=============================================================================
//Routes request
//=============================================================================

app.get("/", function(req,res){
	res.render("homepage");
})

app.use(patientsRoutes);
app.use(daysRoutes);
//=============================================================================
//Starting the server
//=============================================================================

app.listen(3001,process.env.ip,function(){
	console.log("Server has Started");
})