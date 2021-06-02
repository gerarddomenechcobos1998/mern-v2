const express = require("express");
const Activity = require("./models/Activity");
const router = express.Router();

// READ all activities
router.get("/activities", async (req, res) => {
	const activities = await Activity.find();
	res.send(activities);
})
// READ ONE activity using the ID
router.get("/activities/:id", async (req, res) => {
	try{
		const activity = await Activity.findOne({ _id: req.params.id });
		res.send(activity);
	}
	catch{
		res.status(404);
		res.send({error: "There is not any object with the '_id' specified"})
	}
})
// CREATE a activity
router.post("/activities", async (req, res) => {
	const activity = new Activity({
		name: req.body.name,
		properties: req.body.properties,
	})
	await activity.save()
	res.send(activity)
})
// UPDATE a activity
router.put("/activities/:id", async (req, res) => {
	try {
		const activity = await Activity.findOne({ _id: req.params.id });
		// Mira propiedad a propiedad si existen cambios
		if (req.body.name) {
			activity.name = req.body.name;
		}

		if (req.body.properties) {
			activity.properties = req.body.properties;
		}
		await activity.save();
		res.send(activity);
	} catch {
		res.status(404)
		res.send({error: "There is not any object with the '_id' specified"})
	}
})
// DELETE a activity
router.delete("/activities/:id", async (req, res) => {
	try {
		await Activity.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({error: "There is not any object with the '_id' specified"})
	}
})

module.exports = router