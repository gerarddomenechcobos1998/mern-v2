const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: String,
	properties: String,
},{
	versionKey: false 
})

module.exports = mongoose.model("Activity", schema)