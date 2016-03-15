'use strict';

var path = process.cwd();


module.exports = function (app) {


	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
	app.route('/poep')
		.get(function(req, res) {
			var pathURL = req.path();
			res.send(pathURL);
		});
};
