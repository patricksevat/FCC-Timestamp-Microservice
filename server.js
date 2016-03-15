'use strict';

var express = require('express');
var app = express();
app.set('title', 'Timestamper');
app.set()
var path = process.cwd();
require('dotenv').load();

	app.get('/',function (req, res) {
			res.sendFile(path + '/public/index.html');
			
		});
	app.get('/*',function(req, res) {
			var pathURL = decodeURIComponent(req.path);
			pathURL = pathURL.substr(1).toLowerCase();
			pathURL= pathURL.replace(',','');
			pathURL= pathURL.replace('nd','');
			pathURL= pathURL.replace('rd','');
			var arr = pathURL.split(' ');
			for(var i=0; i<arr.length; i++){
				if (arr[i] !== 'august'){
					arr[i] = arr[i].replace('st','');
				}
			}
			console.log(arr);
			if (arr.length === 1 && arr[0].length === 10) {
				var date = new Date(arr[0]*1000);
				res.end('{"unix": '+arr[0]+', "natural": '+month(date.getMonth())+', '+day(date.getDate())+' '+date.getFullYear()+' }');
			}
			else if (arr.length === 3){
				var newDate = new Date(arr.join(' '));
				res.end('{"unix": '+(newDate.valueOf()/1000)+', "natural": '+month(newDate.getMonth())+', '+day(newDate.getDate())+' '+newDate.getFullYear()+' }');
				
			
			}
			else {
				res.end(('{"unix": null, "natural": null}'))
			}
			
			
		});



var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});

function month(num){
	if(num===0) return 'January';
	if(num===1) return 'February';
	if(num===2) return 'March';
	if(num===3) return 'April';
	if(num===4) return 'May';
	if(num===5) return 'June';
	if(num===6) return 'July';
	if(num===7) return 'August';
	if(num===8) return 'September';
	if(num===9) return 'October';
	if(num===10) return 'November';
	if(num===11) return 'December';
}

function day(num){
	switch (num) {
		case 1:
		case 21:
		case 31:
			return num+'st';
		case 2:
		case 22:
			return num+'nd';
		case 3:
		case 23:
			return num+'rd';
		default:
			return num+'th';
	}
}