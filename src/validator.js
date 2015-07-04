var ZSchema = require("z-schema"),
  fs = require('fs'),
  path = require('path');


var options = {
  forceAdditional: false,
  forceItems: false,
  forceMaxLength: false,
  forceProperties: false,
  noExtraKeywords: true,
  noTypeless: true,
  noEmptyStrings: false,
  noEmptyArrays: false
};

var validator = new ZSchema(options);
var schema = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../schema/schema.json'), 'utf8'));

exports.validate = function(json, callback) {
  validator.validate(json, schema, function(err, valid) {
    callback(err, valid);
  });
};
