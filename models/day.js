var mongoose = require("mongoose");

var daySchema = new mongoose.Schema({
	symptoms: String,
	imaging: String,
	tests: String,
	bloodSampling: String,
	bodySecretions: String,
	otherDiseases: String,
	treatment: String
})

module.exports = mongoose.model("Days",daySchema)