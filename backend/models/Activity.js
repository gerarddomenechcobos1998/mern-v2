const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: String,
	properties: String,
})

module.exports = mongoose.model("Activity", schema)