var ZSchema = require("z-schema"),
  fs = require('fs'),
  path = require('path');

// Load necassry files and parse json
var schema = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../schema/schema.json'), 'utf8')),
  example= JSON.parse(fs.readFileSync(path.resolve(__dirname, '../examples/awesome/js.json')));

// Options for z-schema
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

// Validate given json with tooling schema
function validate(json, callback) {
  validator.validate(json, schema, function(err, valid) {
    callback(err, valid);
  });
}

// Export module
module.exports = {
  example : example,
  schema : schema,
  validate : validate
};
