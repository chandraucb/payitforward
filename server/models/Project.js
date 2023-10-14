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
    schedule: {
        type: Schema.Types.ObjectId,
        ref: 'Events',
        required: false
    },
    goal: {
        type: String,
        required: false
    },
    sponsor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    volunteer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
});

const Project = model('Project', projectSchema);

module.exports = Project;
