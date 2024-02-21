const mongoose = require('mongoose');

const RegisteredSchema = new mongoose.Schema({
    userName : String,
    email:String,
    password:String,
})
const RegisteredModel = mongoose.model('register',RegisteredSchema);

const LoginedSchema = new mongoose.Schema({
    email:String,
    password:String,
})
const LoginedModel = mongoose.model('login',LoginedSchema);

module.exports= RegisteredModel,LoginedModel;