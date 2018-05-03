var express = require('express');
var path = require('path');
var config = require('config');
var app = express();
var wishlistApp = require('./wishlist').app;


app.use(express.static(path.join(__dirname, 'public')));

function basePath(req) {
	var externalPathValue = req.header("hybris-external-path");

	if (externalPathValue) {
		//remove trailing slash, if any
		return externalPathValue.replace(/\/$/, "");
	} else {
		return "";
	}
}
app.get('/', function (req, res) {
	res.redirect(basePath(req) + "/api-console/");
});

app.use(wishlistApp);

app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000');
