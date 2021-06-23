// FONT: https://rahmanfadhil.com/express-rest-api/
const PORT = 3000;
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const routes = require("./routes");

// Connect to MongoDB database
mongoose 
	.connect("mongodb://db:27017/db", { useNewUrlParser: true })
	.then(() => {
		const app = express();
		app.use(express.json()); /*Express by default is not able to read a request body if we no use this*/
		// CORS policy
		app.use(cors());
		app.use("/api", routes); /* The "/api" is the prefix, so we can change it to other prefix */
		// Start server at port specified
		app.listen(PORT, () => {
            console.log("Server has started! ", PORT);
        })
	})

