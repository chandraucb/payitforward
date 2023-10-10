const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    caption: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Post = model('Post', postSchema);

module.exports = Post;