var express = require("express");
var router = express.Router();
var patientsModel = require("../models/patient.js")

router.get("/patients",function(req,res){
	patientsModel.find({},function(err, foundCampgrounds){
		if(err){
			res.redirect("/");
		}else{
			res.render("patients/index",{campgrounds:foundCampgrounds});
		}
	});
});
//New Patients route
router.get("/patients/new",function(req,res){
	res.render("patients/new");
});

router.post("/patients",function(req,res){
	patientsModel.create(
		req.body.patient
		,function(err,addedPatient){
		if(err){
			res.redirect("back");
		}else{
			console.log(addedPatient)
			res.redirect("/patients");
		}
	});
});
//Detailed info route for a patient
router.get("/patients/:id",function(req,res){
	patientsModel.findById(req.params.id).populate("days").exec(function(err, foundPatient){
		if(err){
			res.redirect("/patients");
		}else{
			res.render("patients/show",{patient:foundPatient});
		}
	});
});

//Update Patient routes
router.get("/patients/:id/edit",function(req,res){
	patientsModel.findById(req.params.id,function(err,foundPatient){
		if(err){
			res.redirect("/patients/"+req.params.id);
		}else{
			res.render("patients/edit",{patient:foundPatient});
		}
	});
});

router.put("/patients/:id",function(req,res){
	patientsModel.findByIdAndUpdate(req.params.id,req.body.patient,function(err,updatedPatient){
		if(err){
			res.redirect("/patients");
		}else{
			res.redirect("/patients/"+req.params.id);
		}
	});
});

//JSON return calls
router.get("/patients/:id/data.json",function(req,res){
	patientsModel.findById(req.params.id,function(err,foundPatient){
		if(err){
			res.redirect("/patients");
		}else{
			res.json(foundPatient);
		}
	});
});

router.get("/patients.json",function(req,res){
	patientsModel.find({},function(err,foundCampgrounds){
		if(err){
			res.redirect("/")
		}else{
			res.json(foundCampgrounds);
		}
	});
});

module.exports = router;