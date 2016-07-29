/*
Copyright (c) 2016 KeeeX SAS 

This is an open source project available under the MIT license.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

*/
var async = require("async");
var kxapi = require("keeex-api");

$(document).ready(function() {
	console.log("Ready to start !");
	$("#pluginState").text("Asking KeeeX local API token...");

	kxapi.getToken("KeeeX Template plugin", function(err, result){
		if(!err){
			kxapi.getMine(function (err, keeexUserInfo) {
				if (!err) {
					// Display user's name
					$("#userName").text(keeexUserInfo.name.substring(0, keeexUserInfo.name.indexOf(' ')));
					$("#pluginState").text("Ready !");
				}
				else {
					$("#pluginState").text("Error. Can't get user info from keeex...");
				}
			});

		} else {
			if(err.message == "400 PermissionDenied"){
				// Access denied by the user
				$("#pluginState").text("Error. Access to local API was denied...");
			}
			else {
				// Something else went wrong
				$("#pluginState").text("Can't connect to the local API.");
			}
		}
	});


	async.forever(function(next) {
		var now = new Date();
		$("#clock").text(now.toLocaleString());
		setTimeout(next, 1000, null);
	}, function(error) {
		console.log("Finish forever loop with error: ", error);
	});
});