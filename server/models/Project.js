const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
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
    schedule: [{
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: false
    }],
    goal: {
        type: String,
        required: false
    },
    sponsors: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }],
    volunteers: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }]
});

const Project = model('Project', projectSchema);

module.exports = Project;
