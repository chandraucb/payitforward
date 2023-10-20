const mongoose = require('mongoose');

//mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/payitforward');
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://chandrasekarmohan:tiCiFTZZqbReNts7@cluster0.kxvlaz5.mongodb.net/payitforward?retryWrites=true&w=majority");

module.exports = mongoose.connection;
