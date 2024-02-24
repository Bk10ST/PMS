const mongoose = require('mongoose');

UserSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
})

const User = mongoose.model('user', UserSchema);

module.exports = User;


