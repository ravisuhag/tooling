var tooling = require('../src/validator'),
	fs = require('fs'),
	path = require('path');

var json= JSON.parse(fs.readFileSync(path.resolve(__dirname, '../examples/awesome/js.json')));

tooling.validate(json, function(err, valid) {
	if (err) {
		console.error('Test failed');
		console.error(err);
	} else if(valid === true){
		console.info('Test sucessfully passed');
	}
});
