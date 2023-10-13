const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
        minlength: [10, 'Must be at least 10 characters long.'],
        maxlength: [2000, 'Cannot exceed 2000 characters long.']
    },
    projects: {
        type: String,
        required: true,
    },
    organizations: {
        type: String,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;

// Created Profile.js for models. If not needed we can delete.