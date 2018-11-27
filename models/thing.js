var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var thingSchema = new Schema({
  name: { type: String, required: true }
});

// the schema is useless so far,
// we need to create a model using it
var Thing = mongoose.model('Thing', thingSchema);

// make this available to our users in our Node applications
module.exports = Thing;