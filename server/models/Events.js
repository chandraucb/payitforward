const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    eventStart: {
        type: Date,
        required: true
    },
    eventEnd: {
        type: Date,
        required: true
    },
})

const Events = model('Events', eventSchema);

module.exports = Events;