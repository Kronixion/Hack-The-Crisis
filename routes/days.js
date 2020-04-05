var express = require("express");
var router = express.Router();
var daysModel = require("../models/day.js")
var patientModel = require("../models/patient.js")

router.get("/patients/:id/days/new",function(req,res){
	patientModel.findById(req.params.id,function(err,foundPatient){
		if(err){
			res.redirect("back");
		}else{
			res.render("days/new",{patient:foundPatient});
		}
	});
});

router.post("/patients/:id/days",function(req,res){
	patientModel.findById(req.params.id,function(err,foundPatient){
		if(err){
			res.redirect("/patients");
		}else{
			daysModel.create(req.body.day,function(err,createdDay){
				if(err){
					res.redirect("back");
				}else{
					foundPatient.days.push(createdDay);
					foundPatient.save();
					res.redirect("/patients/"+req.params.id);
				}
			});
		}
	});
});

module.exports = router;