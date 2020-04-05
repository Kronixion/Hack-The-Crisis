var mongoose = require("mongoose");

var patientSchema = new mongoose.Schema({
	age: Number,
	sex: String,
	dateOnsetSymptoms: String,
	dateAdmissionHospital: String,
	country: String,
	county: String,
	city: String,
	kg: Number,
	height: Number,
	smoking: String,
	alcohol: String,
	comorbidities: String,
	covidTesting: String,
	additionalInfo: String,
	medicationTreatment: String,
	autopsy: String,
	outcome: String,
	days:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Days"
	}]
});

module.exports = mongoose.model("Patients",patientSchema);

