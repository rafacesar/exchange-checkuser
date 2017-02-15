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

module.exports = function(server,username,password,insecure,endpoint,cb){
	'use strict';
	if (typeof insecure === "function" && cb === undefined) {
		cb = insecure;
	}

	if (typeof endpoint === "function" && cb === undefined) {
		cb = endpoint;
	}

	if (typeof insecure !== "boolean") {
		insecure = false;

		if (typeof insecure === "string" && typeof endpoint === "function") {
			endpoint = insecure;
		}
	}

	if (typeof endpoint !== "string") {
		endpoint = "Exchange.asmx";
	}

	var url = "https://" + server + "/EWS/" + endpoint;


	curl.request({
		url: url,
		head: true,
		user: username+':'+password,
		ntlm: true,
		insecure: insecure
	},function(err, res) {
		var statusCode = getStatusCode(res);


		cb(err, !err && statusCode === 200, statusCode, res);
	});

};