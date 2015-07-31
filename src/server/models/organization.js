var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var organizationSchema = new Schema ({
    organizationID: { type: Number, required: true, unique: true },
    organizationName: { type: String, required: true },
    organizationWebsite: String,
    organizationImage: String
});

var Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;