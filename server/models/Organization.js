const { Schema, model } = require('mongoose');

const organizationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    goal: {
        type: String,
        required: false
    },
    contactInfo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
});

const Organization = model('Organization', organizationSchema);

module.exports = Organization;
