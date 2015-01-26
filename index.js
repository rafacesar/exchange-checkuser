var curl = require('curlrequest');


var getStatusCode = function(response) {
	'use strict';
	var lines = response.split('\n'),
		statusCode;
	
	lines = lines.filter(function(line) {
		return line.indexOf('HTTP/1.') === 0;
	});

	statusCode = lines.map(function(line) {
		line = line.match(/HTTP\/\d\.\d\s+(\d{3})\s+\w+/i);
		return line && line[1];
	});

	if(statusCode.length)
		return parseInt(statusCode[statusCode.length - 1], 10);
	else
		return -1;
};

module.exports = function(server,username,password,cb){
	'use strict';
	var url = "https://" + server + "/EWS/Exchange.asmx";
	

	curl.request({
		url: url,
		head: true,
		user: username+':'+password,
		ntlm: true
	},function(err, res) {
		var statusCode = getStatusCode(res);


		cb(err, !err && statusCode === 200, statusCode, res);
	});

};