
const express = require('express');

const app = express();

app.get('*', function (req, res) {
	const ipaddress = req.headers.host;
	const language = req.headers["accept-language"].substring(0, 5);
	const software = req.headers["user-agent"].split(/[()]+/)[1];

	const response = { ipaddress: ipaddress,
		language: language, software: software };
	console.log("ip: " + ipaddress);
	console.log("language: " + language);
	console.log("OP System: " + software);
	
  	res.send(response);
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Request Header app listening on port 3000');
})