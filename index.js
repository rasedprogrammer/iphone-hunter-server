const express = require("express");
const app = express();
const cors = require("cors");
const phones = require("./phones.json");
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello Iphone Hunter!!!!");
});

app.get("/phones", (req, res) => {
	res.send(phones);
});

app.get("/phones/:id", (req, res) => {
	const id = req.params.id;
	console.log("See Phones Id", id);
	const phone = phones.find((phone) => phone.id === id || {});
	res.send(phone);
});

app.listen(port, () => {
	console.log("listening on port: " + port);
});
// "test": "echo \"Error: no test specified\" && exit 1"
