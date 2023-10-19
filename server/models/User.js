const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Events.js
const eventSchema = require('./Event');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  //Users scheduled volunteer events
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: false
  }],
},
// set this to use virtual below
{
  toJSON: {
    virtuals: true,
  },
}
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual('eventCount').get(function () {
  return this.events.length;
});

const User = model('User', userSchema);

module.exports = User;